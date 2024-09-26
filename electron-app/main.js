const { app, BrowserWindow } = require("electron");
const path = require("path");

app.disableHardwareAcceleration();

console.log("Preload script path:", path.join(__dirname, "preload.js"));

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: "preload.js",
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile(path.join(__dirname, "./public/index.html"));
}

app.whenReady().then(createWindow);
