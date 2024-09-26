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
const assetModel_1 = require("../models/assetModel");
const router = (0, express_1.Router)();
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const assets = yield assetModel_1.Asset.find();
        res.json(assets);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching assets", error });
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type, size } = req.body;
        const asset = new assetModel_1.Asset({ name, type, size });
        yield asset.save();
        res.status(201).json(asset);
    }
    catch (error) {
        res.status(500).json({ message: "Error uploading asset", error });
    }
}));
exports.default = router;
//# sourceMappingURL=assetRoutes.js.map