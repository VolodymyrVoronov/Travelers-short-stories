export interface IStoriesStore {
  stories: string[];
  storiesByAuthors: [];
  selectedAuthor: string;
  isLiking: boolean;
  loadingStories: boolean;
  areBestStoriesCliked: boolean;
  areStoriesCliked: boolean;
  isErrorByFetchingStoriesOccured: boolean;

  getStories(): void;
  getStoriesByAuthor(arg0: string): void;
  getBestStories: () => void;
  setBestStoriesCliked: () => void;
  getStories: () => void;
  setStoriesCliked: () => void;
  deleteStory: (id: string) => void;
  likeStory: (id: string) => void;
  getStoriesByTag: (tag: string) => void;
  writeStory: (newStory: IStory) => void;
  getStoriesByAuthor: (authorId: string) => void;
}

export interface IStory {
  author?: string | any;
  storyTitle: string;
  storyText: string;
  storyTags: string;
  storyPhoto: string;
}

export interface IAuthStore {
  isAuthorizing: boolean;
  authData: string[];
  userLogin: string;
  isAuthorizingSuccessed: boolean;
  isAuthorizingFailed: boolean;
  logout: any;

  setUserLogin: (login: string) => void;
  login: (formData: IAuthStoreFormLoginData, history: string | any) => void;
  registration: (
    formData: IAuthStoreFormRefgistrationData,
    history: string | any
  ) => void;
}

export interface IAuthStoreFormLoginData {
  login: string;
  password: string;
}

export interface IAuthStoreFormRefgistrationData {
  fullName: string;
  avatar: string;
  login: string;
  password: string;
  password2: string;
}

export interface IAuthorsStore {
  authors: [];
  isErrorByFetchingAuthorsOccured: boolean;
  onAuthorStoriesClicked: boolean;

  getAuthors: () => void;
}
