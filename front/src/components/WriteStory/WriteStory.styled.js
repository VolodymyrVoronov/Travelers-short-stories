import styled from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const WriteStoryContainer = styled.div`
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

const WriteStoryTitle = styled.h2`
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

const WriteStoryForm = styled.form`
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

const WriteStoryFormTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const WriteStoryFormTitleLabel = styled.label`
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

const WriteStoryFormTitleInput = styled.input`
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

const WriteStoryFormText = styled.div`
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

const WriteStoryFormTextLabel = styled.label`
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

const WriteStoryFormTextInput = styled.textarea`
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

const WriteStoryFormPhoto = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;

  input {
    display: inline-block;

    width: 100%;

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
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

const WriteStoryFormPhotoLabel = styled.label`
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

const WriteStoryFormTags = styled.div`
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

const WriteStoryFormTagsLabel = styled.label`
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

const WriteStoryFormTagsInput = styled.input`
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

const WriteStoryFormRequired = styled.p`
  display: flex;

  margin-top: 10px;

  font-size: 16px;
  line-height: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};
`;

const WriteStoryFormButtons = styled.div`
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

const WriteStoryFormButton = styled.button`
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

const WriteStoryConfirmDialogContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${colors.blackOpacity09};
`;

const WriteStoryConfirmDialog = styled.div`
  display: flex;
  flex-direction: column;

  width: 25%;
`;

const WriteStoryConfirmDialogTitle = styled.p`
  display: flex;
  justify-content: center;

  margin: 0;

  font-size: 26px;
  line-height: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: center;

  color: ${colors.whiteOpacity08};
`;

const WriteStoryConfirmDialogText = styled.p`
  display: flex;
  justify-content: center;

  margin-top: 15px;

  font-size: 26px;
  line-height: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: center;

  color: ${colors.whiteOpacity08};
`;

const WriteStoryConfirmDialogButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;

const WriteStoryConfirmDialogButton = styled.button`
  display: flex;
  justify-content: center;

  width: 46%;

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
`;

export {
  WriteStoryContainer,
  WriteStoryTitle,
  WriteStoryForm,
  WriteStoryFormTitle,
  WriteStoryFormTitleLabel,
  WriteStoryFormTitleInput,
  WriteStoryFormText,
  WriteStoryFormTextLabel,
  WriteStoryFormTextInput,
  WriteStoryFormPhoto,
  WriteStoryFormPhotoLabel,
  WriteStoryFormTags,
  WriteStoryFormTagsLabel,
  WriteStoryFormTagsInput,
  WriteStoryFormRequired,
  WriteStoryFormButtons,
  WriteStoryFormButton,
  WriteStoryConfirmDialogContainer,
  WriteStoryConfirmDialog,
  WriteStoryConfirmDialogTitle,
  WriteStoryConfirmDialogText,
  WriteStoryConfirmDialogButtons,
  WriteStoryConfirmDialogButton,
};
