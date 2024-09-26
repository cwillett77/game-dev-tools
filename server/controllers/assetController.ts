import { Request, Response } from "express";
import * as assetService from "../services/assetService";

// Fetch all assets
export const getAllAssets = async (_req: Request, res: Response) => {
  try {
    const assets = await assetService.getAllAssets();
    res.status(200).json(assets);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Error fetching assets" });
  }
};

// Upload a new asset
export const uploadAsset = async (req: Request, res: Response) => {
  try {
    const { name, type, size } = req.body;
    const filePath = req.file?.path;

    // Ensure the file path exists
    if (!filePath) {
      return res
        .status(400)
        .json({ message: "File upload failed, file path missing" });
    }

    // Call the service to upload the asset
    const asset = await assetService.uploadAsset(name, type, size, filePath);

    // Send a success response
    return res.status(201).json(asset);
  } catch (error: any) {
    // Ensure the error case returns a response
    return res
      .status(500)
      .json({ message: error.message || "Error uploading asset" });
  }
};
