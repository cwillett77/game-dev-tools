import { Schema, model } from "mongoose";

const AssetSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Number, required: true },
  filePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Asset = model("Asset", AssetSchema);
