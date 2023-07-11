import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { attachementValidator } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

export const createAttachement = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = attachementValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const board = await prisma.attachment.create({
    data: {
      title: value.title,
      path: value.path,
      Card: {
        connect: { id: value.cardId },
      },
    },
  });
  if (!board) next(new AppError("Could not create attachement", 400));
  res.status(201).json({
    status: "success",
    board,
  });
});

export const getAttachementById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const board = await prisma.attachment.findUnique({
    where: {
      id,
    },
  });
  res.status(200).json({
    status: "success",
    board,
  });
});

export const getAllAttachements = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const boards = await prisma.attachment.findMany();
  res.status(200).json({
    status: "success",
    boards,
    count: boards.length,
  });
});

export const deleteAttachementById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const list = await prisma.attachment.delete({
    where: {
      id,
    },
  });
  res.status(204).json({
    status: "success",
    list,
  });
});
