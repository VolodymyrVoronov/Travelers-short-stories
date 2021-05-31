import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 35px 50px 50px 50px;
`;

const LoginFormTitle = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 26px;
  line-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  color: ${colors.whiteOpacity08};
`;

const LoginFormBody = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 35px;

  width: 50%;
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
`;

const LoginFormPassword = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;
`;

const LoginFormPasswordLabel = styled.label`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};
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
`;

const LoginFormButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 35px;
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
