"use client";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const BuildStatus = () => {
  const [buildStatus, setBuildStatus] = useState("No build in progress");

  useEffect(() => {
    const socket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
      withCredentials: true,
    });

    socket.on("buildStatus", (data) => {
      setBuildStatus(data.status);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Current Build Status: {buildStatus}</h2>
    </div>
  );
};

export default BuildStatus;
