import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const RegistrationFormContainer = styled.div`
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

const RegistrationFormTitle = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 26px;
  line-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: center;

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

const RegistrationFormBody = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 35px;

  width: 50%;

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

const RegistrationFormFullName = styled.div`
  display: flex;
  flex-direction: column;
`;

const RegistrationFormFullNameLabel = styled.label`
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

const RegistrationFormFullNameInput = styled.input`
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

const RegistrationFormAvatar = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;

  input {
    display: inline-block;

    width: 80%;

    margin-top: 10px;
    padding: 14px;

    font-size: 20px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;

    color: ${colors.whiteOpacity08};

    background: ${colors.whiteOpacity01};

    border: 1px solid ${colors.whiteOpacity08};

    cursor: pointer;
  }

  @media ${device.mobileS} {
    margin-top: 25px;

    input {
      width: 70%;

      font-size: 16px;
      line-height: 20px;
    }
  }

  @media ${device.mobileM} {
    margin-top: 30px;

    input {
      font-size: 18px;
      line-height: 22px;
    }
  }

  @media ${device.mobileL} {
    margin-top: 35px;

    input {
      width: 75%;

      font-size: 20px;
      line-height: 24px;
    }
  }

  @media ${device.tablet} {
    input {
      width: 80%;
    }
  }
`;

const RegistrationFormAvatarLabel = styled.label`
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

const RegistrationFormAvatarPreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RegistrationFormAvatarPreview = styled.div`
  display: flex;

  width: 100px;
  height: 100px;

  background-image: url(${(props) => props.avatar});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 50%;

  @media ${device.mobileS} {
    width: 70px;
    height: 70px;
  }

  @media ${device.mobileM} {
    width: 80px;
    height: 80px;
  }

  @media ${device.tablet} {
    width: 90px;
    height: 90px;
  }

  @media ${device.laptopL} {
    width: 100px;
    height: 100px;
  }
`;

const RegistrationFormLogin = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;
`;

const RegistrationFormLoginLabel = styled.label`
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

const RegistrationFormLoginInput = styled.input`
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

const RegistrationFormPassword = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;
`;

const RegistrationFormPasswordLabel = styled.label`
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

const RegistrationFormPasswordInput = styled.input`
  display: flex;

  margin-top: 10px;
  padding: 10px 10px;

  font-size: 20px;
  line-height: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};

  background: ${colors.whiteOpacity01};

  ${(props) =>
    props.arePasswordsEqual
      ? css`
          border: 1px solid ${colors.whiteOpacity08};
        `
      : css`
          border: 1px solid ${colors.errorColor};

          &:active,
          &:focus {
            border: 1px solid ${colors.errorColor};
          }
          outline: 1px solid ${colors.errorColor};
        `}

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

const RegistrationFormRequired = styled.p`
  display: flex;

  margin-top: 10px;

  font-size: 16px;
  line-height: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};
`;

const RegistrationFormButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 35px;
`;

const RegistrationFormButton = styled.button`
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
  RegistrationFormContainer,
  RegistrationFormTitle,
  RegistrationFormBody,
  RegistrationFormFullName,
  RegistrationFormFullNameLabel,
  RegistrationFormFullNameInput,
  RegistrationFormAvatar,
  RegistrationFormAvatarLabel,
  RegistrationFormAvatarPreviewContainer,
  RegistrationFormAvatarPreview,
  RegistrationFormLogin,
  RegistrationFormLoginLabel,
  RegistrationFormLoginInput,
  RegistrationFormPassword,
  RegistrationFormPasswordLabel,
  RegistrationFormPasswordInput,
  RegistrationFormRequired,
  RegistrationFormButtons,
  RegistrationFormButton,
};
