import express from "express";
import * as usersController from "../controllers/usersController";
import * as authController from "../controllers/authController";

const Router = express.Router();

Router.route("/signup").post(authController.signup);
Router.route("/login").post(authController.login);

Router.route("/").get(usersController.getAllUsers);

Router.route("/:id")
  .get(usersController.getUserById)
  .put(usersController.updateUserById)
  .delete(usersController.deleteUserById);

export default Router;
