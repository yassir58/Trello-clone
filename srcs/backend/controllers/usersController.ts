import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";

const prisma = new PrismaClient();

export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.create({
      data: {
        userName: req.body.userName,
        profileImage: req.body.profileImage,
        email: req.body.email,
      },
    });
    res.status(201).send(`user created succesfully: ${user.id}`);
  }
);

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany({});
    res.status(200).json({
      status: "success",
      users,
      count: users.length,
    });
  }
);

export const getUserById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        contriBoards: {
          include: {
            users: true,
          },
        },
        myBoards: {
          include: {
            users: true,
          },
        },
      },
    });
    if (!user)
      return next(new AppError(`User ${req.params.id} does not exists`, 400));
    res.status(200).json({
      status: "success",
      user,
    });
  }
);
