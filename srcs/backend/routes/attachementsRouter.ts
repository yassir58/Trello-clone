import express from "express";
import * as attachementsCtrl from "../controllers/attachementsController";

const Router = express.Router({ mergeParams: true });

Router.route("/").get(attachementsCtrl.getAllAttachements).post(attachementsCtrl.createAttachement);

Router.route("/:id").get(attachementsCtrl.getAttachementById).delete(attachementsCtrl.deleteAttachementById);

export default Router;
