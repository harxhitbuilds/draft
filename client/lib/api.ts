import axios from "axios";
import { auth } from "@/lib/firebase";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_API_URL,
  withCredentials: true,
});

API.interceptors.request.use(async (config) => {
  const user = auth.currentUser;

  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
