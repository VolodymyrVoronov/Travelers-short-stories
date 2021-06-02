import create from "zustand";

import { IAuthStore, IAuthStoreFormLoginData } from "../types/types";

import { login, registration } from "../api/api";
import { IAuthStoreFormRefgistrationData } from "./../types/types";

export const useAuthStore = create<IAuthStore>((set, get) => ({
  isAuthorizing: false,
  authData: [],
  userLogin: ``,
  isAuthorizingSuccessed: false,
  isAuthorizingFailed: false,

  login: async (formData: IAuthStoreFormLoginData, history: string | any) => {
    try {
      set({ isAuthorizingFailed: false });
      set({ isAuthorizingSuccessed: false });
      set({ isAuthorizing: true });
      const { data } = await login(formData);
      localStorage.setItem(`profile`, JSON.stringify(await { ...data }));
      set({ authData: await data });
      set({ userLogin: await data.result.login });
      set({ isAuthorizing: false });
      set({ isAuthorizingSuccessed: true });
      history.replace("/main");
    } catch (error) {
      console.log(error);
      set({ isAuthorizingFailed: true });
      set({ isAuthorizing: false });
    }
  },

  registration: async (
    formData: IAuthStoreFormRefgistrationData,
    history: string | any
  ) => {
    try {
      set({ isAuthorizingFailed: false });
      set({ isAuthorizingSuccessed: false });
      set({ isAuthorizing: true });
      const { data } = await registration(formData);
      localStorage.setItem(`profile`, JSON.stringify(await { ...data }));
      set({ authData: await data });
      set({ userLogin: await data.result.login });
      set({ isAuthorizing: false });
      set({ isAuthorizingSuccessed: true });
      history.replace("/main");
    } catch (error) {
      console.log(error);
      set({ isAuthorizingFailed: true });
      set({ isAuthorizing: false });
    }
  },

  logout: () => {
    localStorage.clear();
    set((state) => ({
      ...state,
      authData: [],
      isAuthorizing: false,
      userLogin: ``,
    }));
  },

  setUserLogin: (login: string) => {
    set((state) => ({
      ...state,
      userLogin: login,
    }));
  },
}));
