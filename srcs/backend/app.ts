import express, { Express, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import morgan from "morgan";

import boardsRouter from "./routes/boardsRouter";
import usersRouter from "./routes/usersRouter";
import listsRouter from "./routes/listsRouter";

import AppError from "./utils/AppError";

const app: Express = express();
const prisma = new PrismaClient();

if (process.env.DEV_MODE == "dev") app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/boards", boardsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/lists", listsRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError("Could not get the route", 404));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Failure";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }
});

export default app;
