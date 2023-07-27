import express from "express";
import * as tasksController from "../controllers/tasksController";
import * as authController from "../controllers/authController";

const Router = express.Router({ mergeParams: true });

Router.use(authController.authorizeRoute);

Router.route("/").post(tasksController.createTask);

Router.route("/:id").get(tasksController.getTaskById);

export default Router;
