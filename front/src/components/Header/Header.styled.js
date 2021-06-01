import styled, { css } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  flex-direction: row;
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

  @media ${device.mobileS} {
    position: relative;
    flex-direction: column;

    margin: 10px 10px 0 10px;
  }

  @media ${device.laptop} {
    position: sticky;
    flex-direction: row;

    margin: 25px 50px 0 50px;
  }
`;

const HeaderLogo = styled.p`
  display: flex;

  font-size: 50px;
  line-height: 58px;
  font-family: "Vast Shadow", cursive;

  @media ${device.mobileS} {
    font-size: 25px;
    line-height: 33px;
  }

  @media ${device.mobileM} {
    font-size: 30px;
    line-height: 38px;
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

const HeaderItems = styled.ul`
  display: flex;
  flex-direction: row;

  margin-left: auto;

  a {
    display: flex;

    padding: 20px;
    list-style: none;
    text-decoration: none;

    color: inherit;
  }

  @media ${device.mobileS} {
    flex-wrap: wrap;
    justify-content: center;

    margin-left: 0;
    margin-top: 15px;

    a {
      padding: 15px;
    }
  }

  @media ${device.mobileL} {
    a {
      padding: 20px;
    }
  }

  @media ${device.laptop} {
    margin-left: auto;
    margin-top: 0;
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
