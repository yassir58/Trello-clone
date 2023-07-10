import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        userName: req.body.userName,
        profileImage: req.body.profileImage,
        email: req.body.email,
      },
    });
    res.status(201).send(`user created succesfully: ${user.id}`);
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "could not create user",
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({});
    res.status(200).json({
      status: "success",
      users,
      count: users.length,
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: "No users found",
    });
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: `No user found with ${req.params.id}`,
    });
  }
};
