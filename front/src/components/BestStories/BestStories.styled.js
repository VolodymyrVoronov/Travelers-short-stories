import styled from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const BestStoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 75px 50px 0 50px;

  @media ${device.mobileS} {
    margin: 25px 10px 0 10px;
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {
    margin: 30px 15px 0 15px;
  }

  @media ${device.tablet} {
    margin: 40px 25px 0 25px;
  }

  @media ${device.laptop} {
    margin: 50px 35px 0 35px;
  }

  @media ${device.laptopL} {
    margin: 75px 50px 0 50px;
  }
`;

const BestStoriesTitle = styled.p`
  display: flex;
  justify-content: center;

  font-size: 26px;
  line-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: center;

  color: ${colors.whiteOpacity08};

  @media ${device.mobileS} {
    font-size: 20px;
    line-height: 24px;
  }

  @media ${device.mobileM} {
    font-size: 22px;
    line-height: 26px;
  }

  @media ${device.mobileL} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${device.tablet} {
    font-size: 26px;
    line-height: 30px;
  }
`;

export { BestStoriesContainer, BestStoriesTitle };
