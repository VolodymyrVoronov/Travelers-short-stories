import styled from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 35px 50px 50px 50px;

  @media ${device.mobileS} {
    margin: 25px 10px 50px 10px;
  }

  @media ${device.mobileL} {
    margin: 30px 15px 50px 15px;
  }

  @media ${device.tablet} {
    margin: 35px 50px 50px 50px;
  }
`;

const LoginFormTitle = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 26px;
  line-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  color: ${colors.whiteOpacity08};

  @media ${device.mobileS} {
    font-size: 22px;
    line-height: 26px;
  }

  @media ${device.mobileM} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${device.mobileL} {
    font-size: 26px;
    line-height: 30px;
  }
`;

const LoginFormBody = styled.form`
  display: flex;
  flex-direction: column;

  width: 50%;

  margin: 0 auto;
  margin-top: 35px;

  @media ${device.mobileS} {
    width: 95%;

    margin-top: 25px;
  }

  @media ${device.mobileM} {
    margin-top: 30px;
  }

  @media ${device.mobileL} {
    width: 90%;
    margin-top: 35px;
  }

  @media ${device.tablet} {
    width: 75%;
  }

  @media ${device.laptop} {
    width: 50%;
  }

  @media ${device.desktop} {
    width: 30%;
  }
`;

const LoginFormLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginFormLoginLabel = styled.label`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};

  @media ${device.mobileS} {
    font-size: 18px;
    line-height: 22px;
  }

  @media ${device.mobileM} {
    font-size: 20px;
    line-height: 24px;
  }

  @media ${device.mobileL} {
    font-size: 22px;
    line-height: 26px;
  }
`;

const LoginFormLLoginInput = styled.input`
  display: flex;

  margin-top: 10px;
  padding: 10px 10px;

  font-size: 20px;
  line-height: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};

  background: ${colors.whiteOpacity01};

  border: 1px solid ${colors.whiteOpacity08};

  @media ${device.mobileS} {
    padding: 5px 5px;

    font-size: 18px;
    line-height: 22px;
  }

  @media ${device.mobileM} {
    padding: 10px 10px;

    font-size: 20px;
    line-height: 24px;
  }
`;

const LoginFormPassword = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;

  @media ${device.mobileS} {
    margin-top: 25px;
  }

  @media ${device.mobileM} {
    margin-top: 30px;
  }

  @media ${device.mobileL} {
    margin-top: 35px;
  }
`;

const LoginFormPasswordLabel = styled.label`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};

  @media ${device.mobileS} {
    font-size: 18px;
    line-height: 22px;
  }

  @media ${device.mobileM} {
    font-size: 20px;
    line-height: 24px;
  }

  @media ${device.mobileL} {
    font-size: 22px;
    line-height: 26px;
  }
`;

const LoginFormLPasswordInput = styled.input`
  display: flex;

  margin-top: 10px;
  padding: 10px 10px;

  font-size: 20px;
  line-height: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};

  background: ${colors.whiteOpacity01};

  border: 1px solid ${colors.whiteOpacity08};

  @media ${device.mobileS} {
    padding: 5px 5px;

    font-size: 18px;
    line-height: 22px;
  }

  @media ${device.mobileM} {
    padding: 10px 10px;

    font-size: 20px;
    line-height: 24px;
  }
`;

const LoginFormButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 35px;

  @media ${device.mobileS} {
    margin-top: 25px;
  }

  @media ${device.mobileM} {
    margin-top: 30px;
  }

  @media ${device.mobileL} {
    margin-top: 35px;
  }
`;

const LoginFormButton = styled.button`
  display: flex;
  justify-content: center;

  width: 48%;

  margin: 0;
  padding: 10px 0;

  font-size: 20px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.white};

  background: none;

  border: 1px solid ${colors.whiteOpacity08};

  transition: 0.3s ease;

  &:hover {
    cursor: pointer;

    border-color: ${colors.whiteOpacity09};
    box-shadow: 5px 5px 0px 0px ${colors.whiteOpacity09};

    transition: 0.3s ease;
  }

  &:disabled {
    cursor: default;

    border-color: ${colors.whiteOpacity08};

    opacity: 0.5;

    box-shadow: none;
  }

  @media ${device.mobileS} {
    font-size: 18px;
    line-height: 24px;
  }

  @media ${device.mobileM} {
    font-size: 20px;
    line-height: 26px;
  }
`;

export {
  LoginFormContainer,
  LoginFormTitle,
  LoginFormBody,
  LoginFormLogin,
  LoginFormLoginLabel,
  LoginFormLLoginInput,
  LoginFormPassword,
  LoginFormPasswordLabel,
  LoginFormLPasswordInput,
  LoginFormButtons,
  LoginFormButton,
};
