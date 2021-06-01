import styled, { keyframes } from "styled-components";

import { colors } from "./../../../../styles/colorsPalette";

const NoStoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 50px 0 50px;
`;

const NoStoriesTitle = styled.p`
  display: flex;
  justify-content: center;

  font-size: 26px;
  line-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: center;

  color: ${colors.whiteOpacity08};
`;

const rotateIcon = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;

const NoStoriesIcon = styled.span`
  display: flex;
  justify-content: center;

  margin-top: 35px;

  font-size: 60px;
  line-height: 60px;

  color: ${colors.whiteOpacity08};

  animation: ${rotateIcon} 10s linear infinite;
`;

export { NoStoriesContainer, NoStoriesTitle, NoStoriesIcon };
