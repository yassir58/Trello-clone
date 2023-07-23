import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { userValidator } from "../utils/validator";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";

const prisma = new PrismaClient();

export const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const search = req.query.search as string;
  const users = await prisma.user.findMany({
    select: { id: true, fullname: true, email: true, profileImage: true },
    where: {
      fullname: {
        contains: search ?? undefined,
        mode: "insensitive",
      },
    },
  });
  res.status(200).json({
    status: "success",
    users,
    count: users.length,
  });
});

export const getUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    select: { id: true, fullname: true, email: true, profileImage: true },
    where: {
      id,
    },
  });
  if (!user) return next(new AppError(`User ${req.params.id} does not exists`, 400));
  res.status(200).json({
    status: "success",
    user,
  });
});

//! The validation in this controller might be a problem.
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

  const myBoards = await prisma.board.findMany({
    where: { author: { id } },
  });

  const contriBoards = await prisma.board.findMany({
    where: { users: { some: { id } } },
  });

  const userComments = await prisma.comment.findMany({
    where: { user: { id } },
  });

  const disconnectUser = contriBoards.map((board) =>
    prisma.board.update({
      where: { id: board.id },
      data: { users: { disconnect: { id } } },
    })
  );

  const deleteAuthor = myBoards.map((board) =>
    prisma.board.delete({
      where: { id: board.id },
    })
  );

  const deleteComments = userComments.map((comment) =>
    prisma.comment.delete({
      where: {
        id: comment.id,
      },
    })
  );

  await Promise.all(disconnectUser);
  await Promise.all(deleteAuthor);
  await Promise.all(deleteComments);
  await prisma.user.delete({
    where: {
      id,
    },
  });

  res.status(204).json({
    status: "success",
  });
});
