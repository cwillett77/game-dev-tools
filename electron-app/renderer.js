const axios = require("axios");

// Function to upload asset
const uploadForm = document.getElementById("uploadForm");
uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("name", document.getElementById("name").value);
  formData.append("type", document.getElementById("type").value);
  formData.append("file", document.getElementById("file").files[0]);

  try {
    const response = await window.electron.uploadAsset(formData);
    if (response) {
      alert("Asset uploaded successfully!");
      fetchAssets(); // Refresh the asset list after upload
    } else {
      alert("Failed to upload asset");
    }
  } catch (error) {
    console.error("Error uploading asset:", error);
    alert("An error occurred while uploading the asset.");
  }
});

// Function to fetch and display asset list
const fetchAssets = async () => {
  try {
    const response = await axios.get("http://localhost:5000/assets");
    const assetsList = document.getElementById("assetsList");
    assetsList.innerHTML = response.data
      .map(
        (asset) => `<p>${asset.name} - ${asset.type} - ${asset.size} bytes</p>`
      )
      .join("");
  } catch (error) {
    console.error("Error fetching assets:", error);
  }
};

// Fetch assets on initial load
fetchAssets();
