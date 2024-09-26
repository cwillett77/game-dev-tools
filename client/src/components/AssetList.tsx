"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Asset } from "../types/types";

const AssetList = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    // Fetch assets from backend
    axios
      .get("http://localhost:5000/assets")
      .then((response) => {
        setAssets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assets:", error);
      });
  }, []);

  return (
    <div>
      <h2>Assets List</h2>
      <ul>
        {assets.map((asset) => (
          <li key={asset._id.toString()}>
            {asset.name} - {asset.type} ({asset.size} bytes)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;
