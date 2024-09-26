import { Request, Response } from "express";
import * as buildService from "../services/gameBuildService";

// Trigger a new build
export const triggerBuild = async (_req: Request, res: Response) => {
  try {
    const result = await buildService.triggerBuild();
    res.status(200).json({ message: "Build triggered", result });
  } catch (error) {
    res.status(500).json({ message: "Build failed", error });
  }
};

// Get the build status
export const getBuildStatus = async (_req: Request, res: Response) => {
  const status = buildService.getBuildStatus();
  res.status(200).json(status);
};
