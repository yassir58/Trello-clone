import dotenv from "dotenv";
import { Request, Response } from "express";

import app from "./app";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello from the server");
});

const server = app.listen(port, () => {
  console.log(`Listenning on port ${port}`);
});
