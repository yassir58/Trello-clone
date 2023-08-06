import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { inviteValidator } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

export const createInvite = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  //! Validate the duplication of invite
  const { error, value } = inviteValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const invite = await prisma.invite.create({
    data: {
      ownerId: req.currentUser,
      userId: value.userId,
      board: {
        connect: { id: value.boardId },
      },
    },
  });
  if (!invite) next(new AppError("Could not create Label", 400));
  res.status(201).json({
    status: "success",
    invite,
  });
});

export const acceptInvite = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  // Get the invite informations
  //! I can refactor this code and use the checkExisting function
  const inviteId = req.body.id;
  if (!inviteId) return next(new AppError("Please provide an invite id", 404));
  const invite = await prisma.invite.findUnique({
    where: {
      id: inviteId,
    },
  });
  if (!invite) return next(new AppError("Please provide an invite id", 404));
  if (invite.userId !== req.currentUser)
    return next(new AppError("You are not authorized to accept this invite", 401));
  // If the invite is valid link the user to the board
  await prisma.board.update({
    where: {
      id: invite.boardId,
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
    message: "Invite accepted.",
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

export const getSentInvites = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const invites = await prisma.invite.findMany({
    where: {
      ownerId: req.currentUser,
    },
  });
  res.status(200).json({
    status: "success",
    invites,
    count: invites.length,
  });
});

//? Get all the invites related to a user
export const getAllInvites = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const invites = await prisma.invite.findMany({
    where: {
      userId: req.currentUser,
    },
    include: {
      board: {
        include: {
          users: {
            select: {
              fullname: true,
              profileImage: true,
              email: true,
            },
          },
          author: {
            select: {
              fullname: true,
              profileImage: true,
              email: true,
            },
          },
        },
      },
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
  res.status(200).json({
    status: "success",
    message: "Invite deleted.",
  });
});
