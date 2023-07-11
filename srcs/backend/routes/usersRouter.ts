import express from "express";
import * as userController from "../controllers/usersController";

const Router = express.Router();

Router.route("/").get(userController.getAllUsers).post(userController.createUser);

Router.route("/:id").get(userController.getUserById);

export default Router;
