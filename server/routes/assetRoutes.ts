import { Router } from "express";
import { getAllAssets, uploadAsset } from "../controllers/assetController";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/");
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// GET: Fetch all assets
router.get("/", getAllAssets);

// POST: Upload a new asset with file handling
router.post("/", upload.single("file"), uploadAsset);

export default router;
