import { create } from "zustand";
import { auth, signInWithPopup, provider } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import API from "@/lib/api";
import { toast } from "sonner";
import axios from "axios";

type UserProfile = {
  _id: string;
  name: string;
  username: string;
  email: string;
  onboard: boolean;
};

type AuthStore = {
  user: UserProfile | null;
  authenticating: boolean;
  loading: boolean;
  initAuth: () => void;
  continueWithGoogle: () => Promise<void>;
  onBoard: (data: { username: string; skills: string[] }) => Promise<void>;
  getMe: () => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  authenticating: true,
  loading: false,

  initAuth() {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const res = await API.get("/auth/getMe");
          set({ user: res.data.data.user, authenticating: false });
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
          set({ user: null, authenticating: false });
        }
      } else {
        set({ user: null, authenticating: false });
      }
    });
  },

  async continueWithGoogle() {
    set({ loading: true });
    try {
      await signInWithPopup(auth, provider);
      const res = await API.post("/auth/google");
      set({ user: res.data.data.user });
      toast.success("Login successful");
    } catch (error) {
      let errorMessage = "Log In failed. Please try again.";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      toast.error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  async onBoard({ username, skills }) {
    set({ loading: true });
    try {
      const res = await API.post("/auth/on-board", { username, skills });
      set({ user: res.data.data.user });
      toast.success("On Board successful");
    } catch (error) {
      let errorMessage = "On Board failed. Please try again.";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      toast.error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  async getMe() {
    set({ loading: true });
    try {
      const res = await API.get("/auth/getMe");
      set({ user: res.data.data.user });
    } catch (error) {
      let errorMessage = "GetMe failed. Please try again.";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      console.error("GetMe Error:", errorMessage);
      toast.error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  async logout() {
    set({ loading: true });
    try {
      await auth.signOut();
      await API.get("/auth/logout");
      set({ user: null });
      toast.success("Logged out successfully.");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
}));
