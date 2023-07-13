import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { cardValidator } from "../utils/validator";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

const prisma = new PrismaClient();

export const createCard = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = cardValidator(req.body);
  if (error) return next(new AppError(error.message, 400));
  const card = await prisma.card.create({
    data: {
      title: value.title,
      description: value.description,
      list: {
        connect: value.listId
      }
    },
  });
  if (!card) next(new AppError("Could not create Card", 400));
  res.status(201).json({
    status: "success",
    card,
  });
});

export const getCardById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const card = await prisma.card.findUnique({
    where: {
      id,
    },
    include: {
        comments: true,
        attachments: true,
        labels: true
    }
  });
  res.status(200).json({
    status: "success",
    card,
  });
});

export const getAllCards = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const cards = await prisma.card.findMany();
  res.status(200).json({
    status: "success",
    cards,
    count: cards.length,
  });
});

export const updateCardById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { error, value } = cardValidator(req.body);
    if (error) return next(new AppError(error.message, 400));
    const board = await prisma.card.update({
      where: {
        id,
      },
      data: {
        ...value,
      },
    });
    res.status(200).json({
      status: "success",
      board,
    });
  });

export const deleteCardById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  // Search for the list associated with this card
  // Disconnect it from the list
  // Delete the Card
  const list = await prisma.card.delete({
    where: {
      id,
    },
  });
  res.status(204).json({
    status: "success",
    list,
  });
});
