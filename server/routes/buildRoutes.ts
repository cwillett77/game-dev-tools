import { Router } from "express";
import { triggerBuild, getBuildStatus } from "../controllers/buildController";

const router = Router();

// POST: Trigger a build
router.post("/trigger", triggerBuild);

// GET: Get build status
router.get("/status", getBuildStatus);

export default router;
