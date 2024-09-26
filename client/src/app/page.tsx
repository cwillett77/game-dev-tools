"use client"; // Add this to mark the Home component as a Client Component

import AssetList from "../components/AssetList";
import AssetUpload from "../components/AssetUpload";
import BuildStatus from "../components/BuildStatus";

const Home = () => (
  <div>
    <h1>Game Asset Management</h1>
    <AssetUpload />
    <AssetList />
    <BuildStatus />
  </div>
);

export default Home;
