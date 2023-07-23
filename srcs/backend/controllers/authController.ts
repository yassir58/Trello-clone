import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import sendMail from "../utils/Email";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";
import { userValidator } from "../utils/validator";

const prisma = new PrismaClient();

interface AuthRequest extends Request {
  currentUser: string;
}

const generateToken = (id: string | undefined) => {
  if (!process.env.JWT_SECRET) return null;
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const checkPasswordChanged = (tokenIssueAt: number, passwordChanged: Date | undefined) => {
  if (!passwordChanged) return false;
  const passwordTime = Math.round(new Date(passwordChanged).getTime() / 1000);
  passwordTime > tokenIssueAt ? true : false;
};

const generatePasswordResetToken = async () => {
  return crypto.randomBytes(32).toString("hex");
};

const hashToken = async (token: string) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 12);
};

const checkPassword = async (candidatePassword: string, userPassword: string) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const formatSecureUserResponse = (user: any) => {
  return { fullname: user.fullname, profileImage: user.profileImage, email: user.email };
};

export const updatePassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;

  if (!oldPassword || !newPassword || !confirmPassword)
    return next(new AppError("Please provide the old and new password.", 400));

  const hashedPassword = await hashPassword(newPassword);
  const user = await prisma.user.findUnique({
    where: {
      id: req.currentUser ?? undefined,
    },
  });
  if (!user || !(await checkPassword(oldPassword, user.password)))
    return next(new AppError("Incorrect password please enter the correct one.", 401));

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
    },
  });
});

export const forgotPassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (!user) return next(new AppError("No user is registered using this email", 400));
  const token = await generatePasswordResetToken();
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      passwordResetToken: await hashToken(token),
      passwordResetExpires: new Date(new Date().getTime() + 10 * 60 * 1000).toISOString(),
    },
  });
  const resetLink = `${req.protocol}//${req.hostname}/resetPassword/${token}`;
  const message = `You can reset your password using the following link:\n${resetLink}`;

  try {
    sendMail({
      to: user.email,
      from: "@support Thullo",
      subject: "Password reset token (only valid for 10 mins)",
      text: message,
    });
    res.status(200).json({
      status: "success",
      message: "Please check your inbox.",
    });
  } catch (e) {
    return next(new AppError("Could not send reset token, please retry another time", 400));
  }
});

export const authorizeRoute = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  let decodedToken;
  if (!req.headers.authorization)
    return next(new AppError("No authorization token has been provided please login again.", 401));
  const token = req.headers.authorization.split(" ")[1];
  if (!process.env.JWT_SECRET) return console.log("Authorization Route: Check JWT env variables.");
  decodedToken = (await jwt.verify(token, process.env.JWT_SECRET)) as JwtPayload;
  const user = await prisma.user.findUnique({
    where: {
      id: decodedToken.id,
    },
  });
  if (!user) return next(new AppError("The user associated with this token has been deleted.", 401));
  if (decodedToken.iat && user.passwordChangedAt && checkPasswordChanged(decodedToken.iat, user.passwordChangedAt))
    return next(new AppError("User password has been changed, please login with the new password", 401));
  req.currentUser = "1234455";
  next();
});

export const resetPassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const resetToken = await hashToken(req.params.token);
  const { newPassword, confirmPassword } = req.body;
  if (!(newPassword && confirmPassword))
    return next(new AppError("Please provide the new password with the confirmed password", 400));
  if (!(newPassword === confirmPassword))
    return next(new AppError("Make sure the confirmed passowrd is equal to the password you've provided", 400));
  const user = await prisma.user.findFirst({
    where: {
      passwordResetToken: resetToken,
      passwordResetExpires: {
        gt: new Date().toISOString(),
      },
    },
  });
  if (!user) return next(new AppError("Reset token is invalid or expired, please retry password reset", 400));
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: await hashPassword(newPassword),
      passwordChangedAt: new Date().toISOString(),
    },
  });
  res.status(200).json({
    status: "success",
    message: "Password reset was successfull.",
  });
});

export const signup = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = userValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const password = await hashPassword(value.password);
  const user = await prisma.user.create({
    data: {
      fullname: value.fullname,
      email: value.email,
      password,
    },
  });
  const token = generateToken(user.id);
  if (!token) return new AppError("Internal Error: auth module error", 500);
  res.status(200).json({
    status: "success",
    token,
    user: formatSecureUserResponse(user),
  });
});

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!(email && password)) return next(new AppError("Please provide your email and password", 400));
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !(await checkPassword(password, user.password)))
    return next(new AppError("Incorrect email or password", 401));
  const token = generateToken(user.id);
  if (!token) return new AppError("Internal Error: auth module error", 500);
  res.status(200).json({
    status: "success",
    token,
    user: formatSecureUserResponse(user),
  });
});

export const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const cookieOptions = {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 10 * 1000),
  };

  res.cookie("jwt", "disconnected", cookieOptions);
  res.status(200).json({
    status: "success",
  });
});
