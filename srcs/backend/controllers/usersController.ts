import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { userValidator } from "../utils/validator";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";

const prisma = new PrismaClient();

export const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = userValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const user = await prisma.user.create({
    data: {
      ...value,
    },
  });
  res.status(201).send(`user created succesfully: ${user.id}`);
});

export const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const users = await prisma.user.findMany({});
  res.status(200).json({
    status: "success",
    users,
    count: users.length,
  });
});

export const getUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      contriBoards: {
        include: {
          users: true,
        },
      },
      myBoards: {
        include: {
          users: true,
        },
      },
    },
  });
  if (!user) return next(new AppError(`User ${req.params.id} does not exists`, 400));
  res.status(200).json({
    status: "success",
    user,
  });
});

export const updateUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const { error, value } = userValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const board = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...value,
    },
  });
  res.status(200).json({
    status: "success",
    board,
  });
});

export const deleteUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  // Find all the boards the user created and contributed to

  // Remove the user from the asscociated board

  // Delete the user

  if (!user) return next(new AppError(`Could not delete user ${id}`, 400));
  res.status(204).json({
    status: "success",
    user,
  });
});
