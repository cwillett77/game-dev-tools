"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const assetRoutes_1 = __importDefault(require("./routes/assetRoutes"));
const buildRoutes_1 = __importDefault(require("./routes/buildRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/game-dev-tools", {})
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
app.use("/assets", assetRoutes_1.default);
app.use("/builds", buildRoutes_1.default);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
//# sourceMappingURL=server.js.map