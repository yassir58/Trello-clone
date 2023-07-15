import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

import { listValidator } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

import * as UtilsCtrl from "./factoryController";

const prisma = new PrismaClient();

export const createList = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = listValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const list = await prisma.list.create({
    data: {
      name: value.name,
      Board: {
        connect: { id: value.boardId },
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
  const { error, value } = listValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const list = await prisma.list.update({
    where: {
      id,
    },
    data: {
      ...value,
    },
  });
  if (!list) return next(new AppError(`Could not update list ${id}`, 400));
  res.status(200).json({
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

  await UtilsCtrl.deleteNullCards();
  await UtilsCtrl.deleteNullComments();
  if (!list) return next(new AppError(`Could not delete list ${id}`, 400));
  res.status(204).json({
    status: "success",
    list,
  });
});
