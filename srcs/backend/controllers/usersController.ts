import multer from "multer";
import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { userValidator } from "../utils/validator";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";

const prisma = new PrismaClient();

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/users");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, "user-" + req.currentUser + "-" + Date.now() + "." + ext);
  },
});

const multerFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (file.mimetype.startsWith("image")) cb(null, true);
  else cb(new AppError("Invalid file please upload a valid picture", 400), false);
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadUserPhoto = upload.single("profileImage");



export const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const search = req.query.search as string;
  const users = await prisma.user.findMany({
    select: { id: true, fullname: true, email: true, profileImage: true },
    where: {
      fullname: {
        contains: search ?? undefined,
        mode: "insensitive",
      },
    },
  });
  res.status(200).json({
    status: "success",
    users,
    count: users.length,
  });
});

export const getUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    select: { id: true, fullname: true, email: true, profileImage: true },
    where: {
      id,
    },
  });
  if (!user) return next(new AppError(`User ${req.params.id} does not exists`, 400));
  res.status(200).json({
    status: "success",
    user,
  });
});

export const updateUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  //! Should use check existing function here to validate the existance of the user and only apply this action
  const id = req.params.id;
  const { fullname, email } = req.body;
  const user = await prisma.user.update({
    where: {
      id,
    },
    select: { id: true, fullname: true, email: true, profileImage: true },
    data: {
      fullname,
      email,
      profileImage: req.file?.filename ?? null,
    },
  });
  res.status(200).json({
    status: "success",
    user,
  });
});

export const deleteUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  //! I need to decide weather to keep this route here

  const myBoards = await prisma.board.findMany({
    where: { author: { id } },
  });

  const contriBoards = await prisma.board.findMany({
    where: { users: { some: { id } } },
  });

  const userComments = await prisma.comment.findMany({
    where: { user: { id } },
  });

  const disconnectUser = contriBoards.map((board) =>
    prisma.board.update({
      where: { id: board.id },
      data: { users: { disconnect: { id } } },
    })
  );

  const deleteAuthor = myBoards.map((board) =>
    prisma.board.delete({
      where: { id: board.id },
    })
  );

  const deleteComments = userComments.map((comment) =>
    prisma.comment.delete({
      where: {
        id: comment.id,
      },
    })
  );

  await Promise.all(disconnectUser);
  await Promise.all(deleteAuthor);
  await Promise.all(deleteComments);
  await prisma.user.delete({
    where: {
      id,
    },
  });

  res.status(204).json({
    status: "success",
  });
});
