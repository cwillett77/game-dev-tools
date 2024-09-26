import axios from "axios";

const API_URL = "http://localhost:5000/assets";

export const getAssets = async () => {
  return axios.get(API_URL);
};

export const uploadAsset = async (assetData: FormData) => {
  return axios.post(API_URL, assetData);
};
