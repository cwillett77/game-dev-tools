import axios from "axios";

const API_URL = "http://localhost:5000/builds";

export const triggerBuild = async () => {
  return axios.post(`${API_URL}/trigger`);
};

export const getBuildStatus = async () => {
  return axios.get(`${API_URL}/status`);
};
