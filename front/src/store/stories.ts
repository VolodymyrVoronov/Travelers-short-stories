import create from "zustand";

import { IStoriesStore, IStory } from "./../types/types";

import {
  fetchStories,
  fetchBestStories,
  writeStory,
  deleteStory,
  likeStory,
} from "../api/api";

export const useStoriesStore = create<IStoriesStore>((set, get) => ({
  stories: [],
  storiesByAuthors: [],
  selectedAuthor: ``,
  isLiking: false,
  loadingStories: false,
  areBestStoriesCliked: false,
  areStoriesCliked: false,
  isErrorByFetchingStoriesOccured: false,

  getStories: async () => {
    try {
      set({ loadingStories: true });
      const { data } = await fetchStories();
      set({ stories: await data.reverse() });
      set({ loadingStories: false });
    } catch (error) {
      console.log(error);
      set({ isErrorByFetchingStoriesOccured: true });
      set({ loadingStories: false });
    }
  },

  getBestStories: async () => {
    try {
      set({ loadingStories: true });
      const { data } = await fetchBestStories();
      set({ stories: await data.reverse() });
      set({ loadingStories: false });
    } catch (error) {
      console.log(error);
      set({ isErrorByFetchingStoriesOccured: true });
      set({ loadingStories: false });
    }
  },

  writeStory: async (newStory: IStory) => {
    try {
      const newStoryBody = {
        likeCount: 0,
        ...newStory,
      };
      set({ loadingStories: true });
      await writeStory(newStoryBody);
      await get().getStories();
      set({ loadingStories: false });
    } catch (error) {
      console.log(error);
      set({ isErrorByFetchingStoriesOccured: true });
      set({ loadingStories: false });
    }
  },

  deleteStory: async (id: string) => {
    try {
      await deleteStory(id);
      if (get().areBestStoriesCliked) {
        const { data } = await fetchBestStories();
        set({ stories: await data.reverse() });
      }

      if (get().areStoriesCliked) {
        const { data } = await fetchStories();
        set({ stories: await data.reverse() });
      }
    } catch (error) {
      console.log(error);
      set({ isErrorByFetchingStoriesOccured: true });
      set({ loadingStories: false });
    }
  },

  likeStory: async (id: string) => {
    try {
      set({ isLiking: true });
      await likeStory(id);
      if (get().areBestStoriesCliked) {
        const { data } = await fetchBestStories();
        set({ stories: await data.reverse() });
      }

      if (get().areStoriesCliked) {
        const { data } = await fetchStories();
        set({ stories: await data.reverse() });
      }
      set({ isLiking: false });
      get().getStoriesByAuthor(get().selectedAuthor);
    } catch (error) {
      console.log(error);
      set({ isErrorByFetchingStoriesOccured: true });
      set({ loadingStories: false });
      set({ isLiking: false });
    }
  },

  setBestStoriesCliked: () => {
    set((state) => ({
      ...state,
      areBestStoriesCliked: true,
      areStoriesCliked: false,
    }));
  },

  setStoriesCliked: () => {
    set((state) => ({
      ...state,
      areBestStoriesCliked: false,
      areStoriesCliked: true,
    }));
  },

  getStoriesByAuthor: async (authorId: string) => {
    try {
      set({ selectedAuthor: authorId });
      set({ loadingStories: true });
      const { data } = await fetchStories();
      set({
        storiesByAuthors: await data.filter(
          (story: { creator: string }) => story.creator === authorId
        ),
      });
      set({ loadingStories: false });
    } catch (error) {
      console.log(error);
      set({ isErrorByFetchingStoriesOccured: true });
      set({ loadingStories: false });
    }
  },

  getStoriesByTag: async (tag: string) => {
    const separators = [", ", ","];

    try {
      set({ loadingStories: true });
      const { data } = await fetchStories();
      set({
        stories: await data.filter((story: { storyTags: string[] }) =>
          story.storyTags
            .toString()
            .split(new RegExp(separators.join("|"), "g"))
            .includes(tag.trim())
        ),
      });
      set({ loadingStories: false });
    } catch (error) {
      console.log(error);
      set({ isErrorByFetchingStoriesOccured: true });
      set({ loadingStories: false });
    }
  },
}));
