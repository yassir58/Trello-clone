import { PrismaClient, Task } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

import { taskValidator } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

import * as UtilsCtrl from "./factoryController";

const prisma = new PrismaClient();

export const createTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = taskValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const task = await prisma.task.create({
    data: {
      content: value.name,
      checkList: {
        connect: {
          id: value.checkListId,
        },
      },
    },
  });
  if (!task) return next(new AppError("Could not create task", 400));
  res.status(200).json({
    status: "success",
    task,
  });
});

export const getAllTasks = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await prisma.task.findMany({
    where: {
      checkListId: req.params.checklistId ?? undefined,
    },
  });
  res.status(200).json({
    status: "success",
    count: tasks.length,
    tasks,
  });
});

export const getTaskById = UtilsCtrl.getOneById("task");

export const updateTaskById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = taskValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const task = (await UtilsCtrl.checkExistance(req, next, "task")) as Task;
  const newTask = await prisma.task.update({
    where: {
      id: task.id,
    },
    data: {
      ...value,
    },
  });
  if (!newTask) return next(new AppError(`Could not update task ${task.id}`, 400));
  res.status(200).json({
    status: "success",
    newTask,
  });
});

export const deleteTaskById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const task = (await UtilsCtrl.checkExistance(req, next, "task")) as Task;
  await prisma.task.delete({
    where: {
      id: task.id,
    },
  });

  res.status(204).json({
    status: "success",
  });
});
