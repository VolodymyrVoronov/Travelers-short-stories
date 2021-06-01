import styled, { css, keyframes } from "styled-components";

import { device } from "./../../../../styles/breakPoints";
import { colors } from "./../../../../styles/colorsPalette";

const PopUpContainer = styled.div`
  position: fixed;
  overflow-y: scroll;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding: 25px 50px;

  background-color: ${colors.blackOpacity09};

  @media ${device.mobileS} {
    padding: 10px 20px;
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {
    padding: 15px 30px;
  }

  @media ${device.tablet} {
    padding: 20px 40px;
  }

  @media ${device.laptop} {
    padding: 25px 50px;
  }
`;

const PopUpHeader = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 25px;

  border-bottom: 1px solid ${colors.whiteOpacity05};
`;

const PopUpHeaderImage = styled.div`
  display: flex;

  width: 100px;
  height: 100px;

  background-image: url(${(props) => props.avatar});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 50%;
`;

const PopUpCloseButton = styled.button`
  display: flex;

  margin: 0;
  margin-left: auto;

  padding: 15px;

  font-size: 20px;
  line-height: 26px;
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
`;

const AuthorStoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;
`;

export {
  PopUpContainer,
  PopUpHeader,
  PopUpHeaderImage,
  PopUpCloseButton,
  AuthorStoriesContainer,
};
