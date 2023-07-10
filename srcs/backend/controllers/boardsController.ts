import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createBoard = async (req: Request, res: Response) => {
  const board = await prisma.board.create({
    data: {
      title: req.body.title,
      coverImage: req.body.coverImage,
      description: req.body.description,
      author: {
        connect: { id: req.body.authorId },
      },
    },
  });
  if (!board)
    return res.status(403).json({
      status: "fail",
      message: "could not create board",
    });
  res.status(201).send(`Board created succesfully: ${board.id}`);
};

export const getAllBoards = async (req: Request, res: Response) => {
  try {
    const boards = await prisma.board.findMany({
      where: {
        visibilty: true,
      },
      include: {
        author: true,
        users: true,
      },
    });
    res.status(200).json({
      status: "success",
      boards,
      count: boards.length,
    });
  } catch (e) {
    return res.status(404).json({
      status: "fail",
      message: "Error getting the boards",
    });
  }
};

export const getBoardById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const board = await prisma.board.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        users: true,
        lists: true,
      },
    });
    res.status(200).json({
      status: "success",
      board,
    });
  } catch (e) {
    return res.status(404).json({
      status: "fail",
      message: `Failed to get board ${req.params.id}`,
    });
  }
};

export const updateBoardById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedFields = req.body;
    const board = await prisma.board.update({
      where: {
        id,
      },
      data: {
        ...updatedFields,
      },
    });
    res.status(200).json({
      status: "success",
      board,
    });
  } catch (e) {
    return res.status(404).json({
      status: "fail",
      message: `Failed to get board ${req.params.id}`,
    });
  }
};
