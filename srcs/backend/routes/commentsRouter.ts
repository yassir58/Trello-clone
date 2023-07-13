import express from "express";
import * as commentsController from "../controllers/commentsController";

const Router = express.Router();

Router.route("/").get(commentsController.getAllComments).post(commentsController.createComment);

Router.route("/:id").get(commentsController.getCommentById).delete(commentsController.deleteCommentById);

export default Router;
