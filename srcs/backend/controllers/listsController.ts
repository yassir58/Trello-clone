import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catchAsync";

const prisma = new PrismaClient();

export const createList = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const list = await prisma.list.create({
    data: {
      name: req.body.name,
      Board: {
        connect: req.body.boardId,
      },
    },
  });
  res.status(201).json({
    status: "success",
    list,
  });
});

export const getAllLists = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const lists = await prisma.list.findMany();
  res.status(200).json({
    status: "success",
    lists,
  });
});

export const getListById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const list = await prisma.list.findUnique({
    where: {
      id,
    },
  });
  res.status(200).json({
    status: "success",
    list,
  });
});

export const updateListById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updatedFields = req.body;
  const list = await prisma.list.update({
    where: {
      id,
    },
    data: {
      ...updatedFields,
    },
  });
  res.status(204).json({
    status: "success",
    list,
  });
});

export const deleteListById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const list = await prisma.list.delete({
    where: {
      id,
    },
  });
  res.status(204).json({
    status: "success",
    list,
  });
});
