import express from "express";
import * as checkListController from "../controllers/checklistsController";
import * as authController from "../controllers/authController";

const Router = express.Router();

Router.use(authController.authorizeRoute);

Router.route("/").post(checkListController.createChecklist);

Router.route("/:id").get(checkListController.getChecklistById);

export default Router;
