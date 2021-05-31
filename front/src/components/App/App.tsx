import React from "react";
import { Switch, Route } from "react-router-dom";

import { useStoriesStore } from "./../../store/stories";
import { useAuthorsStore } from "./../../store/authors";
import { useAuthStore } from "./../../store/auth";

import StartPage from "../StartPage/StartPage";
import MainContent from "../MainContent/MainContent";
import AnimatedBar from "./../common/UI/AnimatedBar/AnimatedBar";
import ErrorPage from "./../common/UI/ErrorPage/ErrorPage";
import SnackBar from "../common/UI/SnackBar/SnackBar";

import { AppBody } from "./App.styled";

const App = (): React.ReactElement => {
  const {
    getBestStories,
    setBestStoriesCliked,
    isLiking,
    loadingStories,
    isErrorByFetchingStoriesOccured,
  }: {
    getBestStories: () => void;
    setBestStoriesCliked: () => void;
    isLiking: boolean;
    loadingStories: boolean;
    isErrorByFetchingStoriesOccured: boolean;
  } = useStoriesStore();

  const {
    getAuthors,
    isErrorByFetchingAuthorsOccured,
  }: { getAuthors: () => void; isErrorByFetchingAuthorsOccured: boolean } =
    useAuthorsStore();

  const { isAuthorizing }: { isAuthorizing: boolean } = useAuthStore();

  React.useEffect(() => {
    getBestStories();
    setBestStoriesCliked();
    getAuthors();
  }, []);

  return (
    <AppBody>
      <SnackBar />
      {isAuthorizing || isLiking || loadingStories ? <AnimatedBar /> : null}

      {isErrorByFetchingStoriesOccured || isErrorByFetchingAuthorsOccured ? (
        <ErrorPage />
      ) : (
        <>
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>

            <Route path="/main">
              <MainContent />
            </Route>
          </Switch>
        </>
      )}
    </AppBody>
  );
};

export default App;
