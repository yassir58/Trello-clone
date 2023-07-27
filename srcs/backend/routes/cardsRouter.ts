import express from "express";
import * as cardsController from "../controllers/cardsController";

import labelsRouter from "./labelsRouter";
import commentsRouter from "./commentsRouter";
import checklistsRouter from "./checkListRouter";
import attachementsRouter from "./attachementsRouter";

const Router = express.Router({ mergeParams: true });

Router.use("/:cardId/labels", labelsRouter);
Router.use("/:cardId/comments", commentsRouter);
Router.use("/:cardId/checklists", checklistsRouter);
Router.use("/:cardId/attachements", attachementsRouter);

Router.route("/").get(cardsController.getAllCards).post(cardsController.createCard);

Router.route("/:id")
  .get(cardsController.getCardById)
  .put(cardsController.updateCardById)
  .delete(cardsController.deleteCardById);

export default Router;
