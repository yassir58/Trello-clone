import express from "express";
import * as boardsController from "../controllers/boardsController";
import * as authController from '../controllers/authController';

const Router = express.Router();

Router.use(authController.authorizeRoute);

Router.route("/").get(boardsController.getAllBoards).post(boardsController.createBoard);

Router.route("/:id")
  .get(boardsController.getBoardById)
  .put(boardsController.updateBoardById)
  .delete(boardsController.deleteBoardById);

export default Router;
