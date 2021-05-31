import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const WriteStoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 35px 50px 50px 50px;
`;

const WriteStoryTitle = styled.h2`
  display: flex;
  justify-content: center;

  font-size: 26px;
  line-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  color: ${colors.whiteOpacity08};
`;

const WriteStoryForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 35px;

  width: 50%;
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
`;

const WriteStoryFormText = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;
`;

const WriteStoryFormTextLabel = styled.label`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};
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
`;

const WriteStoryFormPhotoLabel = styled.label`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};
`;

const WriteStoryFormTags = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 35px;
`;

const WriteStoryFormTagsLabel = styled.label`
  display: flex;

  font-size: 22px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};
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
