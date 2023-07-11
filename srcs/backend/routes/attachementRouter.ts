import express from "express";
import * as attachementCtrl from "../controllers/attachementController";

const Router = express.Router();

Router.route("/").get(attachementCtrl.getAllAttachements).post(attachementCtrl.createAttachement);

Router.route("/:id").get(attachementCtrl.getAttachementById).delete(attachementCtrl.deleteAttachementById);

export default Router;
