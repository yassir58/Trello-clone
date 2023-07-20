import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";
import { userValidator } from "../utils/validator";

const prisma = new PrismaClient();

const generateToken = (id: string | undefined) => {
  console.log(process.env.JWT_SECRET);
  return jwt.sign({ id }, "test", {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
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

export const updatePassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (!oldPassword || !newPassword || !confirmPassword)
      return next(new AppError("Please provide the old and new password.", 400));

    const hashedPassword = await hashPassword(newPassword);
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
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
  }
);

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
  res.status(200).json({
    status: "success",
    token,
    user: formatSecureUserResponse(user),
  });
});

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!(email && password))
    return next(new AppError("Please provide your email and password", 400));
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !(await checkPassword(password, user.password)))
    return next(new AppError("Incorrect email or password", 401));
  const token = generateToken(user.id);
  res.status(200).json({
    status: "success",
    token,
    user: formatSecureUserResponse(user),
  });
});
