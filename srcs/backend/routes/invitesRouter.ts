import express from "express";
import * as invitesController from "../controllers/invitesController";

const Router = express.Router({ mergeParams: true });

Router.route("/accept").post(invitesController.acceptInvite);

Router.route("/").get(invitesController.getAllInvites).post(invitesController.createInvite);

Router.route("/:id").get(invitesController.getInviteById).delete(invitesController.deleteInviteById);

export default Router;
