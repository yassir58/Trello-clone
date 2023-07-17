import express from "express";
import * as labelsController from "../controllers/labelsController";

const Router = express.Router({ mergeParams: true });

Router.route("/").get(labelsController.getAllLabels).post(labelsController.createLabel);

Router.route("/:id").delete(labelsController.deleteLabelById);

export default Router;