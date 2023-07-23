import { Request, Response, NextFunction } from "express";
import { PrismaClient, Prisma } from "@prisma/client";

import AppError from "../utils/AppError";

const client = new PrismaClient();

const handleOperationErrors = (err: Error): any => {
  // Handle database errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      const keys = err.meta?.target as string[];
      return new AppError(`Duplicated keys : ${keys.join(",")} have to be unique`, 400);
    } else if (err.code === "P1001") return new AppError(`Connection Error : Cloud not reach database server`, 400);
    else if (err.code === "P1008") return new AppError(`Timeout Error : Operations timed out `, 400);
    else if (err.code === "P1008") return new AppError(`Timeout Error : Operations timed out `, 400);
  }
  console.log(err);
  // Handle authentification and errors related to JWT
  // Handle generic errors
  return new AppError("Something went very wrong", 400);
};

const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!(err instanceof AppError)) err = handleOperationErrors(err);
  if (err instanceof AppError) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "failure";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
};

export default handleErrors;
