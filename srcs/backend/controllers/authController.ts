import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import sendMail from "../utils/Email";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";
import { userValidator } from "../utils/validator";
import EncryptText from "../utils/Encyption";

const prisma = new PrismaClient();

const generateToken = async (id: string | undefined) => {
  if (!process.env.JWT_SECRET) return null;
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const checkPasswordChanged = (tokenIssueAt: number, passwordChanged: Date | undefined) => {
  if (!passwordChanged) return false;
  const passwordTime = Math.round(new Date(passwordChanged).getTime() / 1000);
  return passwordTime > tokenIssueAt ? true : false;
};

const generatePasswordResetToken = async () => {
  return crypto.randomBytes(32).toString("hex");
};

const hashToken = async (token: string) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};

const hashPassword = async (password: string) => {
  crypto.createCipheriv;
  return await bcrypt.hash(password, 12);
};

const checkPassword = async (candidatePassword: string, userPassword: string) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export const formatSecureUserResponse = (user: any) => {
  return { fullname: user.fullname, profileImage: user.profileImage, email: user.email };
};

const sendAuthToken = async (res: Response, next: NextFunction, userId: string) => {
  const token = await generateToken(userId);
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + parseInt(process.env.JWT_EXPIRES_IN || "90") * 24 * 3600000),
  };
  if (!token) return next(new AppError("Internal Error: auth module error", 500));
  res.cookie("jwt", token, cookieOptions);
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
  const resetLink = `${req.protocol}://${req.hostname}/resetPassword/${token}`;
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
  let token;

  if (!process.env.JWT_SECRET)
    return next(new AppError("Auth error: could not sign token, please contact admin.", 400));
  if (!req.headers.authorization && !req.cookies.jwt)
    return next(new AppError("No authorization token has been provided please login again.", 401));
  //? I gave priority to authorization header so the user can override the jwt cookie
  if (req.headers.authorization) token = req.headers.authorization.split(" ")[1];

  token = req.cookies.jwt;
  decodedToken = (await jwt.verify(token, process.env.JWT_SECRET)) as JwtPayload;
  const user = await prisma.user.findUnique({
    where: {
      id: decodedToken.id,
    },
    select: {
      id: true,
      passwordChangedAt: true,
    },
  });
  if (!user) return next(new AppError("The user associated with this token has been deleted.", 401));
  if (decodedToken.iat && user.passwordChangedAt && checkPasswordChanged(decodedToken.iat, user.passwordChangedAt))
    return next(new AppError("User password has been changed, please login with the new password", 401));
  req.currentUser = user.id;
  req.boardId = new EncryptText(req.cookies.boardId).decrypt() || null;
  next();
});

export const preventUnauthorized = (level: string | undefined) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.boardId) return next(new AppError("Board id is not selected please reload the application", 400));
    const board = await prisma.board.findUnique({
      where: {
        id: req.boardId,
      },
      include: {
        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (!board) return next(new AppError("The board that you've request does not exists", 400));
    if (level === "admin") {
      if (board.authorId != req.currentUser)
        return next(new AppError("Sorry this action can only be performed by the board admin", 401));
    } else {
      const users = board.users.map((item) => item.id);
      if (!users.includes(req.currentUser))
        return next(new AppError("User is authorized to perform this action on this baord", 401));
    }
    next();
  });
};

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
      passwordResetToken: null,
      passwordResetExpires: null,
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
  await sendAuthToken(res, next, user.id);
  res.status(200).json({
    status: "success",
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
  await sendAuthToken(res, next, user.id);
  res.status(200).json({
    status: "success",
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
