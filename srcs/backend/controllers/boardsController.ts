import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";
import { boardValidator } from "../utils/validator";
import * as UtilsCtrl from "./factoryController";

const prisma = new PrismaClient();

export const createBoard = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = boardValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const board = await prisma.board.create({
    data: {
      title: value.title,
      coverImage: value.coverImage,
      description: value.description,
      author: {
        connect: { id: value.authorId },
      },
    },
  });
  if (!board) next(new AppError("Could not create board", 400));
  res.status(201).json({
    status: "success",
    board,
  });
});

export const getAllBoards = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const boards = await prisma.board.findMany({
    where: {
      visibilty: true,
    },
    include: {
      author: true,
      users: true,
      lists: true,
    },
  });
  res.status(200).json({
    status: "success",
    boards,
    count: boards.length,
  });
});

export const getBoardById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const board = await prisma.board.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
      users: true,
      lists: true,
    },
  });
  if (!board) return next(new AppError(`Could not find board: ${id}`, 404));
  res.status(200).json({
    status: "success",
    board,
  });
});

export const updateBoardById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const { error, value } = boardValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const board = await prisma.board.update({
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

export const deleteBoardById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const board = await prisma.board.delete({
    where: {
      id,
    },
  });

  await UtilsCtrl.deleteNullLists();
  await UtilsCtrl.deleteNullCards();
  await UtilsCtrl.deleteNullComments();

  if (!board) return next(new AppError(`Could not find board ${id}`, 404));
  res.status(204).json({
    status: "success",
    board,
  });
});
