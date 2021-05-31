import styled, { css, keyframes } from "styled-components";

import { device } from "./../../../../styles/breakPoints";
import { colors } from "./../../../../styles/colorsPalette";

const barAnimation = keyframes`
  \ 0% {
    background-position: 0% 50%;
  }
  \ 50%{
    background-position: 100% 50%;
  }
  \ 100%{
    background-position: 0% 50%;
  }
`;

const AnimatedBarContainer = styled.div`
  position: absolute;
  display: flex;

  width: 100%;
  height: 5px;

  background: linear-gradient(268deg, #0185ec, #ed5469);
  background-size: 400% 400%;

  animation: ${barAnimation} 2.5s ease infinite;
`;

export { AnimatedBarContainer };
