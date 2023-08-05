import express from "express";
import * as boardsController from "../controllers/boardsController";
import * as authController from "../controllers/authController";
import listsRouter from "./listsRouter"

const Router = express.Router();

Router.use(authController.authorizeRoute);

Router.use("/:boardId/lists", listsRouter)
Router.route("/").get(boardsController.getAllBoards).post(boardsController.createBoard);


Router.route("/:id")
  .get(boardsController.getBoardById)
  .put(authController.preventUnauthorized("admin"), boardsController.updateBoardById)
  .delete(authController.preventUnauthorized("admin"), boardsController.deleteBoardById);

export default Router;
