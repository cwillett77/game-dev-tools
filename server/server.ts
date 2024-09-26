import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import assetRoutes from "./routes/assetRoutes";
import buildRoutes from "./routes/buildRoutes";
import { createServer } from "http";
import { Server } from "socket.io";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import path from "path";

// Initialize express app
const app = express();
const httpServer = createServer(app);

// WebSocket Server setup with CORS
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Adjust this as needed for the front-end URL
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/game-dev-tools", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.use("/assets", assetRoutes);
app.use("/builds", buildRoutes);

// Swagger API Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// WebSocket connection
io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  // Example WebSocket event: Build status updates
  socket.emit("buildStatus", { status: "Build in progress..." });
});

// Start the server
httpServer.listen(5000, () => {
  console.log("Server is running on port 5000");
});
