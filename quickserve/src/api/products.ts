import axios from "axios";

const API_URL = "https://api.oluwasetemi.dev/products";

export const fetchProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
