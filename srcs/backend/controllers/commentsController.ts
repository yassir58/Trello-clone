import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { commentValidator } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

export const createComment = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = commentValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const comment = await prisma.comment.create({
    data: {
      content: value.content,
      card: {
        connect: { id: value.cardId },
      },
      user: {
        connect: { id: value.userId },
      },
    },
  });
  if (!comment) next(new AppError("Could not create Comment", 400));
  res.status(201).json({
    status: "success",
    comment,
  });
});

export const getCommentById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const comment = await prisma.comment.findUnique({
    where: {
      id,
    },
  });
  if (!comment) return (next(new AppError(`Could not find comment: ${id}`, 404)))
  res.status(200).json({
    status: "success",
    comment,
  });
});

export const getAllComments = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const comments = await prisma.comment.findMany();
  res.status(200).json({
    status: "success",
    comments,
    count: comments.length,
  });
});

export const updateCommentById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { error, value } = commentValidator(req.body);
    if (error) return next(new AppError(error.message, 400));
    const board = await prisma.comment.update({
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

export const deleteCommentById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  // Search for all the card this comment associated with
  // Disconnect it from all the cards
  // Delete the Comment
  const list = await prisma.comment.delete({
    where: {
      id,
    },
  });
  res.status(204).json({
    status: "success",
    list,
  });
});
