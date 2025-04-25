import axios from "axios";

const api = axios.create({
  baseURL: "https://data.javin.io:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getFetcher = async (url: string) => {
  const res = await api.get(url);
  return res.data;
};
