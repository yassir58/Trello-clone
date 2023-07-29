import express from "express";
import * as checkListController from "../controllers/checklistsController";
import * as authController from "../controllers/authController";

import tasksRouter from '../routes/tasksRouter';

const Router = express.Router({ mergeParams: true });

Router.use(authController.authorizeRoute);

Router.use('/:checkListId/tasks', tasksRouter)

Router.route("/").post(checkListController.createChecklist).get(checkListController.getAllChecklists);

Router.route("/:id")
  .get(checkListController.getChecklistById)
  .put(checkListController.updateChecklistById)
  .delete(checkListController.deleteChecklistById);

export default Router;
