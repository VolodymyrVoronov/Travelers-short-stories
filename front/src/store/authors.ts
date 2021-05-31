import create from "zustand";

import { IAuthorsStore } from "../types/types";

import { fetchAuthors } from "../api/api";

export const useAuthorsStore = create<IAuthorsStore>((set, get) => ({
  authors: [],
  isErrorByFetchingAuthorsOccured: false,
  onAuthorStoriesClicked: false,

  getAuthors: async () => {
    try {
      set({ isErrorByFetchingAuthorsOccured: false });
      const { data } = await fetchAuthors();
      set({
        authors: await data.map(
          (item: { fullName: string; avatar: string; _id: string }) => [
            item.fullName,
            item.avatar,
            item._id,
          ]
        ),
      });
    } catch (error) {
      console.log(error);
      set({ isErrorByFetchingAuthorsOccured: true });
    }
  },

  setAuthorStoriesClicked: (condition: boolean) => {
    set((state) => ({
      ...state,
      onAuthorStoriesClicked: condition,
    }));
  },
}));
