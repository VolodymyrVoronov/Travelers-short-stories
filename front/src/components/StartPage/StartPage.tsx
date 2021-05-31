import React from "react";
import { useHistory } from "react-router-dom";

import AnimatedWrapper from "./../common/UI/AnimatedWrapper/AnimatedWrapper";

import {
  StartPageContainer,
  StartPageBlock,
  StartPageBlockTitle,
  StartPageBlockButton,
} from "./StartPage.styled";

const StartPage = (): React.ReactElement => {
  const history = useHistory();

  const onReadButtonClick = () => {
    history.replace("/main");
  };

  return (
    <StartPageContainer>
      <StartPageBlock>
        <AnimatedWrapper>
          <StartPageBlockTitle>Travelers' Short Stories</StartPageBlockTitle>
        </AnimatedWrapper>
        <AnimatedWrapper begin={1500}>
          <div>
            <StartPageBlockButton onClick={onReadButtonClick}>
              Read
            </StartPageBlockButton>
          </div>
        </AnimatedWrapper>
      </StartPageBlock>
    </StartPageContainer>
  );
};

export default StartPage;
