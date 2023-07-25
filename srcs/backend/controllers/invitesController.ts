import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { inviteValidator } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

export const createInvite = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = inviteValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const label = await prisma.invite.create({
    data: {
      user: {
        connect: { id: value.userId },
      },
      board: {
        connect: { id: value.boardId },
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
  const inviteId = req.params.id;
  if (!inviteId) return next(new AppError("Please provide an invite id", 404));
  const invite = await prisma.invite.findUnique({
    where: {
      id: inviteId,
    },
  });
  if (!invite) return next(new AppError("Please provide an invite id", 404));
  // If the invite is valid link the user to the board
  await prisma.board.update({
    where: {
      id: invite.id,
    },
    data: {
      users: {
        connect: { id: invite.userId },
      },
    },
  });
  // After accepting the invite delete it
  await prisma.invite.delete({
    where: {
      id: inviteId,
    },
  });
  res.status(200).json({
    status: "success",
    message: "user added succesfully.",
  });
});

export const getInviteById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.body.id;
  const invite = await prisma.invite.findUnique({
    where: {
      id,
    },
  });
  if (!invite) return next(new AppError(`Could not find the invite ${id}`, 404));
  res.status(200).json({
    status: "success",
    invite,
  });
});

//? Get all the invites related to a user
export const getAllInvites = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const invites = await prisma.invite.findMany({
    where: {
      userId: req.currentUser,
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
  await prisma.invite.delete({
    where: {
      id,
    },
  });
  res.status(204).json({
    status: "success",
  });
});
