const { contextBridge, ipcRenderer } = require("electron");
const axios = require("axios");

contextBridge.exposeInMainWorld("electron", {
  uploadAsset: async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/assets",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error uploading asset:", error);
      throw error;
    }
  },
  fetchAssets: async () => {
    try {
      const response = await axios.get("http://localhost:5000/assets");
      return response.data;
    } catch (error) {
      console.error("Error fetching assets:", error);
      throw error;
    }
  },
});
