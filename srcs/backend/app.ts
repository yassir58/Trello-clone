import express, { Express, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import morgan from "morgan";

import usersRouter from "./routes/usersRouter";
import listsRouter from "./routes/listsRouter";
import cardsRouter from "./routes/cardsRouter";
import boardsRouter from "./routes/boardsRouter";
import labelsRouter from "./routes/labelsRouter";
import commentsRouter from "./routes/commentsRouter";
import attachementsRouter from "./routes/attachementsRouter";

import AppError from "./utils/AppError";

const app: Express = express();
const prisma = new PrismaClient();

if (process.env.DEV_MODE == "dev") app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/boards", boardsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/lists", listsRouter);
app.use("/api/v1/cards", cardsRouter);
app.use("/api/v1/labels", labelsRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/attachements", attachementsRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError("Could not get the route", 404));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Failure";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
});

export default app;
