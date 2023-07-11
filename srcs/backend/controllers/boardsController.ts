import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

export const createBoard = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const board = await prisma.board.create({
      data: {
        title: req.body.title,
        coverImage: req.body.coverImage,
        description: req.body.description,
        author: {
          connect: { id: req.body.authorId },
        },
      },
    });
    if (!board) next(new AppError("Could not create board", 400));
    res.status(201).json({
      status: "success",
      board,
    });
  }
);

export const getAllBoards = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const boards = await prisma.board.findMany({
      where: {
        visibilty: true,
      },
      include: {
        author: true,
        users: true,
      },
    });
    res.status(200).json({
      status: "success",
      boards,
      count: boards.length,
    });
  }
);

export const getBoardById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
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
    res.status(200).json({
      status: "success",
      board,
    });
  }
);

export const updateBoardById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedFields = req.body;
    const board = await prisma.board.update({
      where: {
        id,
      },
      data: {
        ...updatedFields,
      },
    });
    res.status(200).json({
      status: "success",
      board,
    });
  }
);
