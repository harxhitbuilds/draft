import axios from "axios";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { create } from "zustand";

import API from "@/lib/api";
import type { AuthStore } from "@/types/stores";

export const useAuthStore = create<AuthStore>((set, get) => ({
  updating: false,

  async onBoard(username: string, skills: any) {
    try {
      const res = await API.post("/auth/on-board", { username, skills });
      return res.data.data.user;
    } catch (error) {
      console.log(error);
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.message
          : "Onboarding failed. Please try again.";
      toast.error(errorMessage);
      throw error;
    }
  },

  async logout() {
    try {
      await API.post("/auth/logout");
    } catch (error) {
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.message
          : "Logout failed.";
      toast.error(errorMessage);
      console.error("Backend logout failed", error);
    } finally {
      await signOut({ callbackUrl: "/auth" });
    }
  },
}));
