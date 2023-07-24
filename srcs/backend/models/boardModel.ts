import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Board, PrismaClient } from "@prisma/client";
import AppError from "../utils/AppError";
import EncryptText from "../utils/Encyption";

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
  return board;
};

export const sendBoardId = async (boardId: string, res: Response) => {
  // Set the board id
  const encryptedBoardId = new EncryptText(boardId).encrypt();

  const cookieOptions = {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 2160 * 60 * 601000),
  };

  res.cookie("boardId", encryptedBoardId, cookieOptions);
};

export default boardSchema;
