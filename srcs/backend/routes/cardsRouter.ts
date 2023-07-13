import express from "express";
import * as cardsController from "../controllers/cardsController";

const Router = express.Router();

Router.route("/").get(cardsController.getAllCards).post(cardsController.createCard);

Router.route("/:id")
  .get(cardsController.getCardById)
  .put(cardsController.updateCardById)
  .delete(cardsController.deleteCardById);

export default Router;
