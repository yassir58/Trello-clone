import express from "express";
import * as usersController from "../controllers/usersController";
import * as authController from "../controllers/authController";

const Router = express.Router();

Router.route("/signup").post(authController.signup);
Router.route("/login").post(authController.login);
Router.route("/resetPassword/:token").post(authController.resetPassword);
Router.route("/forgotPassword").post(authController.forgotPassword);
Router.route("/updatePassword").post(authController.authorizeRoute, authController.updatePassword);

Router.use(authController.authorizeRoute);

Router.route("/logout").post(authController.logout);

Router.route("/").get(usersController.getAllUsers);

Router.route("/:id")
  .get(usersController.getUserById)
  .put(usersController.updateUserById)
  .delete(usersController.deleteUserById);

export default Router;
