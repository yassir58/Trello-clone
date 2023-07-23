import { Board, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import * as UtilsCtrl from "./factoryController";

import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";
import { boardValidator } from "../utils/validator";
import { validateBoardAction } from "../models/boardModel";

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
        connect: { id: req.currentUser },
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
  const search = req.query.search as string;
  const boards = await prisma.board.findMany({
    where: {
      visibilty: true,
      title: {
        contains: search ?? undefined,
        mode: "insensitive",
      },
    },
    include: {
      author: {
        select: { id: true, fullname: true, email: true, profileImage: true },
      },
      users: {
        select: { id: true, fullname: true, email: true, profileImage: true },
      },
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
      author: {
        select: { id: true, fullname: true, email: true, profileImage: true },
      },
      users: {
        select: { id: true, fullname: true, email: true, profileImage: true },
      },
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
  const board = (await validateBoardAction(req, next)) as Board;
  const { error, value } = boardValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  await prisma.board.update({
    where: {
      id: board.id,
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
  const board = (await validateBoardAction(req, next)) as Board;

  await prisma.board.delete({
    where: {
      id: board.id,
    },
  });

  await UtilsCtrl.deleteNullLists();
  await UtilsCtrl.deleteNullCards();
  await UtilsCtrl.deleteNullComments();

  res.status(204).json({
    status: "success",
    board,
  });
});
