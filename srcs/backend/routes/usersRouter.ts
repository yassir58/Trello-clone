import express from "express";
import * as usersController from "../controllers/usersController";

const Router = express.Router();

Router.route("/").get(usersController.getAllUsers).post(usersController.createUser);

Router.route("/:id").get(usersController.getUserById);

export default Router;
