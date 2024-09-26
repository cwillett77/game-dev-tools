"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
const mongoose_1 = require("mongoose");
const AssetSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.Asset = (0, mongoose_1.model)("Asset", AssetSchema);
//# sourceMappingURL=assetModel.js.map