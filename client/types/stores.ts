import { ParamValue } from "next/dist/server/request/params";

import { IIdea } from "@/types/index";
import { ISocialLinks } from "@/types/index";

import { IUser } from "./next-auth";

type AuthStore = {
  updating: false;
  logout: () => Promise<void>;
};

type IdeaStore = {
  ideas: IIdea[];
  currentIdea: IIdea | null;
  cursor: string | null;
  hasMore: boolean;
  loading: boolean;
  fetching: boolean;
  fetchIdeas: (limit?: number) => Promise<void>;
  searchIdeas: (query: string) => Promise<void>;
  fetchIdeaBySlug: (slug: ParamValue) => Promise<void>;
  uploadIdea: (data: any, onSuccess?: () => void) => Promise<void>;
  updateIdea: (
    slug: string,
    data: any,
    onSuccess?: () => void,
  ) => Promise<void>;
  deleteIdea: (slug: string, onSuccess?: () => void) => Promise<void>;
  clearIdeas: () => void;
};

type UserStore = {
  user: IUser | null;
  userIdeas: IIdea[];
  fetchUser: () => Promise<void>;
  updateUserProfile: (data: ISocialLinks) => Promise<any>;

  searchedUser: IUser | null;
  searchedUserIdeas: IIdea[];
  fetchSearchedUser: (username : string) => Promise<void>;

  fetching: boolean;
};

export type { AuthStore, IdeaStore, UserStore };
