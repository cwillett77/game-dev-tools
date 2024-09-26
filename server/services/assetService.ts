import { Asset } from "../models/assetModel";

// Fetch all assets from the database
export const getAllAssets = async () => {
  try {
    const assets = await Asset.find();
    return assets;
  } catch (error) {
    throw new Error("Error fetching assets");
  }
};

// Upload a new asset to the database
export const uploadAsset = async (
  name: string,
  type: string,
  size: number,
  filePath: string
) => {
  try {
    const asset = new Asset({ name, type, size, filePath });
    await asset.save();
    return asset;
  } catch (error) {
    throw new Error("Error uploading asset");
  }
};
