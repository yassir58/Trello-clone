import { PrismaClient, Comment } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { commentValidator } from "../utils/validator";
import { validateCommentAction } from "../models/commentModel";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";

const prisma = new PrismaClient();

export const createComment = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = commentValidator(req.body);
  const cardId = req.params.cardId || value.cardId;
  if (!cardId) return next(new AppError("No card id was provided", 400));
  if (error) return next(new AppError(error.message, 400));
  const comment = await prisma.comment.create({
    data: {
      content: value.content,
      card: {
        connect: { id: cardId },
      },
      user: {
        connect: { id: req.currentUser },
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
  if (!comment) return next(new AppError(`Could not find comment: ${id}`, 404));
  res.status(200).json({
    status: "success",
    comment,
  });
});

export const getAllComments = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const comments = await prisma.comment.findMany({
    where: {
      card: {
        id: req.params.cardId ?? undefined,
      },
    },
    include: {
      user: {
        select: {
          fullname: true,
          profileImage: true,
        },
      },
    },
  });
  res.status(200).json({
    status: "success",
    comments,
    count: comments.length,
  });
});

export const updateCommentById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = commentValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const comment = (await validateCommentAction(req, next)) as Comment;
  await prisma.comment.update({
    where: {
      id: comment.id,
    },
    data: {
      ...value,
    },
  });
  res.status(200).json({
    status: "success",
    comment,
  });
});

export const deleteCommentById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const comment = (await validateCommentAction(req, next)) as Comment;

  await prisma.comment.delete({
    where: {
      id: comment.id,
    },
  });
  res.status(204).json({
    status: "success",
  });
});
