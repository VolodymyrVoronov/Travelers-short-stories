import axios from "axios";

import {
  IAuthStoreFormLoginData,
  IAuthStoreFormRefgistrationData,
  IStory,
} from "../types/types";

const URL = `http://localhost:5000`;

const instanceAPI = axios.create({
  baseURL: URL,
});

instanceAPI.interceptors.request.use((req) => {
  if (localStorage.getItem(`profile`)) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem(`profile`) || "").token
    }`;
  }

  return req;
});

const fetchStories = () => instanceAPI.get(`/stories`);
const fetchBestStories = () => instanceAPI.get(`/stories/bestStories`);
const writeStory = (newStory: IStory) => instanceAPI.post(`/stories`, newStory);
const deleteStory = (id: string) => instanceAPI.delete(`/stories/${id}`);
const likeStory = (id: string) => instanceAPI.patch(`/stories/${id}/likeStory`);

const login = (formData: IAuthStoreFormLoginData) =>
  instanceAPI.post(`/user/login`, formData);
const registration = (formData: IAuthStoreFormRefgistrationData) =>
  instanceAPI.post(`/user/registration`, formData);

const fetchAuthors = () => instanceAPI.get(`/user/authors`);

export {
  fetchStories,
  fetchBestStories,
  writeStory,
  deleteStory,
  likeStory,
  login,
  registration,
  fetchAuthors,
};
