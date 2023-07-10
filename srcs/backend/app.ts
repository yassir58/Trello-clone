import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

import boardsRouter from "./routes/boardsRouter";

const prisma = new PrismaClient();
const app: Express = express();

if (process.env.DEV_MODE == "dev") app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/boards", boardsRouter);

app.post("/users", async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        userName: req.body.userName,
        profileImage: req.body.profileImage,
        email: req.body.email,
      },
    });
    res.status(201).send(`user created succesfully: ${user.id}`);
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "could not create user",
    });
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({});
    res.status(200).json({
      status: "success",
      users,
      count: users.length,
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: "No users found",
    });
  }
});

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        contriBoards: {
          include: {
            users: true,
          },
        },
        myBoards: {
          include: {
            users: true,
          },
        },
      },
    });
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: `No user found with ${req.params.id}`,
    });
  }
});

export default app;
