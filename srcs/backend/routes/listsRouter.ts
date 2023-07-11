import express from "express";
import * as listsController from "../controllers/listsController";

const Router = express.Router();

Router.route("/").get(listsController.getAllLists).post(listsController.createList);

Router.route("/:id")
  .get(listsController.getListById)
  .delete(listsController.deleteListById)
  .put(listsController.updateListById);

export default Router;
