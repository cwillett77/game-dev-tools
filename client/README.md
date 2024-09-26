# Game Asset Management & Build Automation Tool

This project is a Game Asset Management and Build Automation tool designed for game developers to manage assets (textures, models, audio, etc.), trigger game builds, and monitor build progress.

The project consists of three parts:

1. **Backend**: A REST API built with Node.js and Express for handling asset uploads and triggering game builds.
2. **Frontend**: A Next.js web dashboard for uploading and managing game assets and monitoring build statuses.
3. **Electron App**: A cross-platform desktop app built with Electron to manage assets locally and trigger builds with Unity/Unreal integration.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Backend](#backend)
  - [Frontend (Next.js)](#frontend-nextjs)
  - [Electron App](#electron-app)
- [API Endpoints](#api-endpoints)
- [Electron App Features](#electron-app-features)
- [Build and Run](#build-and-run)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Electron App](#electron-app)
- [Tech Stack](#tech-stack)

## Features

- Upload game assets (images, models, audio files).
- View asset details (name, type, size).
- Trigger and monitor game builds using Unity/Unreal’s CLI.
- Real-time build status updates using WebSockets.
- Cross-platform Electron app for local asset management and build automation.

## Getting Started

### Backend

The backend is a Node.js server with Express and MongoDB for storing asset metadata and managing asset uploads.

#### Install Dependencies:

```bash
cd server
yarn install
```

#### Run the Development Server:

`yarn dev`

The server will run at <http://localhost:5000>. You can use the following API endpoints to interact with the backend:

- `GET /assets`: Fetch all assets
- `POST /assets`: Upload a new asset (use `multipart/form-data`)
- `POST /builds/trigger`: Trigger a game build
- `GET /builds/status`: Check the current build status

### Frontend (Next.js)

The frontend is a Next.js web dashboard for managing and viewing assets, and monitoring game build status.

#### Install Dependencies:

```bash
cd client
yarn install
```

#### Run the Development Server:

`yarn dev`

Open <http://localhost:3000> in your browser to access the frontend dashboard.

### Electron App

The Electron app allows developers to manage assets and trigger builds locally on their desktop.

#### Install Dependencies:

```bash
cd electron-app
yarn install
```

#### Run the Electron App:

`yarn start`

The Electron app will open in a new window. You can upload assets, trigger builds, and view build statuses from the desktop interface.

## API Endpoints

Here are the key API endpoints:

- **Assets**
  - `GET /assets`: Fetch all uploaded assets.
  - `POST /assets`: Upload a new asset (requires `name`, `type`, and `file`).
- **Builds**
  - `POST /builds/trigger`: Trigger a new game build.
  - `GET /builds/status`: Retrieve the current build status.

## Electron App Features

- Upload assets directly from the desktop app.
- View and manage assets in real-time.
- Trigger game builds with Unity/Unreal.
- View real-time build statuses.

## Build and Run

### Backend

To build and run the backend server:

```bash
cd server
yarn build
yarn start
```

### Frontend

To build the Next.js frontend:

```bash
cd client
yarn build
yarn start
```

### Electron App

To package the Electron app for distribution:

```bash
cd electron-app
yarn package
```

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: Next.js, React, TypeScript
- **Electron App**: Electron, Axios for HTTP requests
- **Real-Time Communication**: WebSockets via Socket.io
