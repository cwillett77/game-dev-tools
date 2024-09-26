"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const AssetUpload = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setSize(event.target.files[0].size);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("size", size.toString());
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/assets", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Asset uploaded successfully");
    } catch (error) {
      console.error("Error uploading asset:", error);
      alert("Failed to upload asset");
    }
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-semibold">Upload New Asset</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-500 bg-black text-white rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-white"
          >
            Type:
          </label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full border border-gray-500 bg-black text-white rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-white"
          >
            File:
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-500 bg-black text-white rounded-md shadow-sm p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AssetUpload;
