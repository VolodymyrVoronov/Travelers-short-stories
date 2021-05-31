import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const BestStoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 75px 50px 0 50px;
`;

const BestStoriesTitle = styled.p`
  display: flex;
  justify-content: center;

  font-size: 26px;
  line-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  color: ${colors.whiteOpacity08};
`;

export { BestStoriesContainer, BestStoriesTitle };
