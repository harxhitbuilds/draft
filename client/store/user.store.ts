import axios from "axios";
import { toast } from "sonner";
import { create } from "zustand";

import API from "@/lib/api";
import { ISocialLinks } from "@/types";
import type { UserStore } from "@/types/stores";

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  userIdeas: [],

  searchedUser: null,
  searchedUserIdeas: [],

  fetching: false,

  fetchSearchedUser: async (username: string) => {
    set({ fetching: true, user: null, userIdeas: [] });
    try {
      const res = await API.get(`/user/get-profile/${username}`);
      set({
        searchedUser: res.data.data.user,
        searchedUserIdeas: res.data.data.userIdeas,
      });
    } catch (error) {
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.message
          : "Failed to fetch user profile.";
      toast.error(errorMessage);
      console.error("Failed to fetch profile:", error);
      throw error;
    } finally {
      set({ fetching: false });
    }
  },

  fetchUser: async () => {
    set({ fetching: true });
    try {
      const res = await API.get("/user/getMe");
      set({ userIdeas: res.data.data.userIdeas });
    } catch (error) {
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.message
          : "Failed to fetch your ideas.";
      toast.error(errorMessage);
    } finally {
      set({ fetching: false });
    }
  },

  updateUserProfile: async (data: ISocialLinks) => {
    try {
      const response = await API.post("/user/update", data);
      return response.data.data.user;
    } catch (error) {
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.message
          : "Failed to update profile.";
      toast.error(errorMessage);
      console.error("Failed to update profile:", error);
      throw error;
    }
  },
}));
