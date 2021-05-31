import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./../Header/Header";
import Stories from "./../Stories/Stories";
import WriteStory from "./../WriteStory/WriteStory";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import BestStories from "./../BestStories/BestStories";
import Authors from "../Authors/Authors";

import { MainContentContainer } from "./MainContent.styled";

const MainContent = (): React.ReactElement => {
  return (
    <MainContentContainer>
      <Header />
      <Switch>
        <Route exact path="/main">
          <BestStories />
        </Route>
        <Route exact path="/main/stories">
          <Stories />
        </Route>
        <Route exact path="/main/authors">
          <Authors />
        </Route>
        <Route exact path="/main/write-story">
          <WriteStory />
        </Route>
        <Route exact path="/main/login">
          <LoginForm />
        </Route>
        <Route exact path="/main/registration">
          <RegistrationForm />
        </Route>
      </Switch>
    </MainContentContainer>
  );
};

export default MainContent;
