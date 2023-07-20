import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";

// Routers
import usersRouter from "./routes/usersRouter";
import listsRouter from "./routes/listsRouter";
import cardsRouter from "./routes/cardsRouter";
import boardsRouter from "./routes/boardsRouter";
import labelsRouter from "./routes/labelsRouter";
import invitesRouter from "./routes/invitesRouter";
import commentsRouter from "./routes/commentsRouter";
import attachementsRouter from "./routes/attachementsRouter";

// Error handling
import AppError from "./utils/AppError";
import handleErrors from "./controllers/errorController";

const app: Express = express();

if (process.env.DEV_MODE == "dev") app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/lists", listsRouter);
app.use("/api/v1/cards", cardsRouter);
app.use("/api/v1/boards", boardsRouter);
app.use("/api/v1/labels", labelsRouter);
app.use("/api/v1/invites", invitesRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/attachements", attachementsRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Error 404 Not Found: http://{HOST}${req.originalUrl} does not exist`, 404));
});

app.use(handleErrors);

export default app;
