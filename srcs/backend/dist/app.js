"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = require("express-rate-limit");
const express_1 = __importDefault(require("express"));
// Routers
const usersRouter_1 = __importDefault(require("./routes/usersRouter"));
const listsRouter_1 = __importDefault(require("./routes/listsRouter"));
const cardsRouter_1 = __importDefault(require("./routes/cardsRouter"));
const boardsRouter_1 = __importDefault(require("./routes/boardsRouter"));
const labelsRouter_1 = __importDefault(require("./routes/labelsRouter"));
const invitesRouter_1 = __importDefault(require("./routes/invitesRouter"));
const commentsRouter_1 = __importDefault(require("./routes/commentsRouter"));
const attachementsRouter_1 = __importDefault(require("./routes/attachementsRouter"));
// Error handling
const AppError_1 = __importDefault(require("./utils/AppError"));
const errorController_1 = __importDefault(require("./controllers/errorController"));
const app = (0, express_1.default)();
if (process.env.DEV_MODE == "dev")
    app.use((0, morgan_1.default)("dev"));
// The rate limiter is configured to serve 5000Req/Hour
app.use((0, express_rate_limit_1.rateLimit)({
    windowMs: 60 * 60 * 1000,
    max: 5000,
}));
// app.use(cookieParser());
app.use(express_1.default.json({ limit: '10kb' }));
app.use((0, helmet_1.default)());
app.use("/api/v1/users", usersRouter_1.default);
app.use("/api/v1/lists", listsRouter_1.default);
app.use("/api/v1/cards", cardsRouter_1.default);
app.use("/api/v1/boards", boardsRouter_1.default);
app.use("/api/v1/labels", labelsRouter_1.default);
app.use("/api/v1/invites", invitesRouter_1.default);
app.use("/api/v1/comments", commentsRouter_1.default);
app.use("/api/v1/attachements", attachementsRouter_1.default);
app.all("*", (req, res, next) => {
    next(new AppError_1.default(`Error 404 Not Found: http://{HOST}${req.originalUrl} does not exist`, 404));
});
app.use(errorController_1.default);
exports.default = app;
function cookieParser() {
    throw new Error("Function not implemented.");
}
