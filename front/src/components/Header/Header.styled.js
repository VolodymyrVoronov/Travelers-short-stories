import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  align-items: center;

  top: 0;

  margin: 25px 50px 0 50px;

  color: ${colors.white};

  ${(props) =>
    props.position &&
    css`
      padding-left: 15px;
      background-color: ${colors.whiteOpacity02};
    `}

  a {
    color: inherit;

    list-style: none;
    text-decoration: none;
  }
`;

const HeaderLogo = styled.p`
  display: flex;

  font-size: 50px;
  line-height: 58px;
  font-family: "Vast Shadow", cursive;
`;

const HeaderItems = styled.ul`
  display: flex;

  margin-left: auto;

  a {
    display: flex;

    padding: 20px;
    list-style: none;
    text-decoration: none;

    color: inherit;
  }
`;

const HeaderItem = styled.li`
  display: flex;

  font-size: 18px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity09};

  transition: 0.3s ease;

  &:hover {
    background-color: ${colors.whiteOpacity01};

    transition: 0.3s ease;
  }
`;

const HeaderuserLogin = styled.span`
  display: flex;

  margin-left: 5px;

  font-size: 18px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

export {
  HeaderContainer,
  HeaderLogo,
  HeaderItems,
  HeaderItem,
  HeaderuserLogin,
};
