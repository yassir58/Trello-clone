import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const app: Express = express();

if (process.env.DEV_MODE == "dev") app.use(morgan("dev"));

app.use(express.json({ limit: "10kb" }));

app.post("/users", async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      userName: req.body.userName,
      profileImage: faker.image.url(),
    },
  });
  if (!user)
    return res.status(403).json({
      status: "fail",
      message: "could not create user",
    });
  res.status(201).send(`user created succesfully: ${user.id}`);
});

app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: {
      Board: true,
    },
  });
  if (!users)
    return res.status(404).json({
      status: "fail",
      message: "No baords found",
    });
  res.status(200).json({
    users,
  });
});

app.post("/boards", async (req: Request, res: Response) => {
  const board = await prisma.board.create({
    data: {
      title: faker.company.catchPhrase(),
      coverImage: faker.image.url(),
      description: faker.commerce.department(),
      author: {
        connect: { id: "85151a83-d7c3-48d2-8235-a9987a6aea6a" },
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

app.get("/boards", async (req: Request, res: Response) => {
  const boards = await prisma.board.findMany({
    include: {
      users: true,
    },
  });
  if (!boards)
    return res.status(404).json({
      status: "fail",
      message: "No baords found",
    });
  res.status(200).json({
    boards,
  });
});

export default app;
