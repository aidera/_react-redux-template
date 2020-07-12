import axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:5000/api/",
  headers: { "Content-Type": "application/json" },
});

export default instance;
