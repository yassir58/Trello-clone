import { CheckList, PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

import { checklistValidor } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

import * as UtilsCtrl from "./factoryController";

const prisma = new PrismaClient();

export const createChecklist = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = checklistValidor(req.body);
  if (error) return next(new AppError(error.message, 400));
  const checklist = await prisma.checkList.create({
    data: {
      name: value.name,
      card: {
        connect: {
          id: value.cardId,
        },
      },
    },
  });
  if (!checklist) return next(new AppError("Could not create checklist", 400));
  res.status(200).json({
    status: "success",
    checklist,
  });
});

export const getAllChecklists = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const checklists = await prisma.checkList.findMany({
    where: {
      cardId: req.params.cardId ?? undefined,
    },
  });
  res.status(200).json({
    status: "success",
    count: checklists.length,
    checklists,
  });
});

export const getChecklistById = UtilsCtrl.getOneById("checkList", ["tasks"]);

export const updateChecklistById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const checklist = (await UtilsCtrl.checkExistance(req, next, "checkList")) as CheckList;
  const newList = await prisma.checkList.update({
    where: {
      id: checklist.id,
    },
    data: {
      name: req.body.name || checklist.name,
    },
  });
  if (!newList) return next(new AppError(`Could not update checklist ${checklist.id}`, 400));
  res.status(200).json({
    status: "success",
    newList,
  });
});

export const deleteChecklistById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const checklist = (await UtilsCtrl.checkExistance(req, next, "checkList")) as CheckList;
  await prisma.checkList.delete({
    where: {
      id: checklist.id,
    },
  });

  res.status(204).json({
    status: "success",
  });
});
