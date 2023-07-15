import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { labelValidator } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

export const createInvite = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = labelValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const label = await prisma.label.create({
    data: {
      color: value.color,
      tag: value.tag,
      card: {
        connect: { id: value.cardId },
      },
    },
  });
  if (!label) next(new AppError("Could not create Label", 400));
  res.status(201).json({
    status: "success",
    label,
  });
});

export const acceptInvite = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  // Get the invite informations

  // If the invite is correct link the user to the board
});

// Get all the invites related to a user
export const getAllInvites = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const invites = await prisma.invites.findMany({
    where: {
      userId: req.body.userId,
    },
  });
  res.status(200).json({
    status: "success",
    invites,
    count: invites.length,
  });
});

export const deleteInviteById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  // Search for all the boards and users associated with this invite
  // Disconnect all users and boards
  // Delete the invite
  const list = await prisma.label.delete({
    where: {
      id,
    },
  });
  res.status(204).json({
    status: "success",
    list,
  });
});
