"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameBuildService_1 = require("../services/gameBuildService");
const router = (0, express_1.Router)();
router.post("/trigger", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, gameBuildService_1.triggerBuild)();
        res.json({ message: "Build triggered successfully", result });
    }
    catch (error) {
        res.status(500).json({ message: "Error triggering build", error });
    }
}));
router.get("/status", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const status = yield (0, gameBuildService_1.getBuildStatus)();
        res.json({ status });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching build status", error });
    }
}));
exports.default = router;
//# sourceMappingURL=buildRoutes.js.map