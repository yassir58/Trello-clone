import { NextFunction, Request, Response } from "express";
import AppError from "./AppError";

const catchAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: Error) => {console.log(err); next(new AppError(err.name, 400))});
  };
};

export default catchAsync;
