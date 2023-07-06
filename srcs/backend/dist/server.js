"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config({
    path: "./config.env",
});
const port = process.env.PORT || 3000;
app_1.default.get("/", (req, res) => {
    res.status(200).send("Hello from the server");
});
const server = app_1.default.listen(port, () => {
    console.log(`Listenning on port ${port}`);
});
