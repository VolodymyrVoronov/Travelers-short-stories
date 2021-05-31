import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

import startPageBg from "./../../assets/startPageBg01.jpg";

const StartPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background-image: linear-gradient(
      ${colors.blackOpacity02},
      ${colors.blackOpacity07}
    ),
    url("${startPageBg}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

const StartPageBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartPageBlockTitle = styled.h1`
  display: flex;
  justify-content: center;

  margin: 0 25px;

  font-family: "Vast Shadow", cursive;
  text-align: center;
  word-spacing: 5px;

  color: ${colors.white};

  @media ${device.mobileS} {
    font-size: 22px;
    line-height: 30px;
  }

  @media ${device.mobileM} {
    font-size: 24px;
    line-height: 32px;
  }

  @media ${device.mobileL} {
    font-size: 40px;
    line-height: 48px;
  }

  @media ${device.tablet} {
    font-size: 50px;
    line-height: 58px;
  }
`;

const StartPageBlockButton = styled.button`
  display: flex;

  margin: 0;
  margin-top: 75px;

  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.white};

  background: none;

  border: 1px solid ${colors.whiteOpacity05};

  transition: 0.3s ease;

  &:hover {
    cursor: pointer;

    border-color: ${colors.whiteOpacity08};
    box-shadow: 5px 5px 0px 0px ${colors.whiteOpacity08};

    transition: 0.3s ease;
  }

  @media ${device.mobileS} {
    padding: 10px 75px;

    font-size: 20px;
    line-height: 26px;
  }

  @media ${device.mobileM} {
    padding: 10px 85px;

    font-size: 22px;
    line-height: 28px;
  }

  @media ${device.mobileL} {
    padding: 10px 95px;

    font-size: 24px;
    line-height: 30px;
  }

  @media ${device.tablet} {
    padding: 10px 100px;

    font-size: 26px;
    line-height: 32px;
  }
`;

export {
  StartPageContainer,
  StartPageBlock,
  StartPageBlockTitle,
  StartPageBlockButton,
};
