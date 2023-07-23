import Joi from "joi";
import { Request, NextFunction } from "express";
import { Board, PrismaClient } from "@prisma/client";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

const boardSchema = Joi.object({
  title: Joi.string().min(5).max(100).required(),
  coverImage: Joi.string().optional(),
  description: Joi.string().optional(),
  visibilty: Joi.boolean().optional(),
});

export const validateBoardAction = async (req: Request, next: NextFunction): Promise<Board | void> => {
  const id = req.params.id;
  const board = await prisma.board.findFirst({
    where: {
      id,
    },
  });

  if (!board) return next(new AppError(`Could not find board ${id}`, 404));
  if (board.authorId != req.currentUser)
    return next(new AppError(`This action can only be performed by board admin`, 401));
  return board;
};

export default boardSchema;
