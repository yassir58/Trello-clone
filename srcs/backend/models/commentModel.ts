import { Comment, PrismaClient } from "@prisma/client";
import { Request, NextFunction } from "express";
import Joi from "joi";
import AppError from "../utils/AppError";

const uuidExpr: RegExp = new RegExp(/^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/);

const prisma = new PrismaClient();

const commentSchema = Joi.object({
  content: Joi.string().min(5).max(500).required(),
  cardId: Joi.string().regex(uuidExpr).required(),
  userId: Joi.string().regex(uuidExpr).optional(),
});

export const validateCommentAction = async (req: Request, next: NextFunction): Promise<Comment | void> => {
  const id = req.params.id;
  const comment = await prisma.comment.findFirst({
    where: {
      id,
    },
  });
  if (!comment) return next(new AppError(`Could not find comment ${id}`, 404));
  if (comment.userId !== req.currentUser)
    return next(new AppError(`You need to be the author of comment ${id} to perform this action`, 401));
  return comment;
};


export default commentSchema;
