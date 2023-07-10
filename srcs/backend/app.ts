import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

import boardsRouter from "./routes/boardsRouter";
import usersRouter from "./routes/usersRouter";

const prisma = new PrismaClient();
const app: Express = express();

if (process.env.DEV_MODE == "dev") app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/boards", boardsRouter);
app.use("/api/v1/users", usersRouter);

export default app;
