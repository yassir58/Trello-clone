import express from "express";
import * as usersController from "../controllers/usersController";
import * as authController from "../controllers/authController";

const Router = express.Router();

Router.route("/signup").post(authController.signup);
Router.route("/login").post(authController.login);
Router.route("/resetPassword/:token").post(authController.resetPassword);
Router.route("/forgotPassword").post(authController.forgotPassword);

Router.use(authController.authorizeRoute);

Router.route("/me").get(authController.isLoggedIn);
Router.route("/updatePassword").post(authController.updatePassword);
Router.route("/logout").post(authController.logout);

Router.route("/").get(usersController.getAllUsers).put(usersController.uploadUserPhoto, usersController.processUserPhoto, usersController.updateUserById);
Router.route("/:id")
  .get(usersController.getUserById)
  .delete(usersController.deleteUserById);

export default Router;
