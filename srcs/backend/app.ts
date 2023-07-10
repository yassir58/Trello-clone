import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app: Express = express();

if (process.env.DEV_MODE == "dev") app.use(morgan("dev"));

app.use(express.json());

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

app.post("/boards", async (req: Request, res: Response) => {
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
});

//users/id/boards

app.get("/boards", async (req: Request, res: Response) => {
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
});

app.get("/boards/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
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
      message: `Failed to get board ${id}`,
    });
  }
});

app.put("/boards/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedFields = req.body;
  try {
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
      message: `Failed to get board ${id}`,
    });
  }
});

export default app;
