import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const StoryContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 50px 0;

  border-bottom: 1px solid ${colors.whiteOpacity05};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StoryHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const StoryTitle = styled.h2`
  display: flex;

  font-size: 26px;
  line-height: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  color: ${colors.whiteOpacity08};
`;

const StoryAuthor = styled.p`
  display: flex;

  font-size: 18px;
  line-height: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;

  color: ${colors.whiteOpacity08};
`;

const StoryBody = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-between;

  margin-top: 35px;
`;

const StoryImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;

  width: 45%;
`;

const StoryImage = styled.div`
  display: flex;

  width: 100%;

  margin-right: 10px;
  margin-bottom: 10px;

  div {
    font-size: 0;
  }
`;

const StoryText = styled.p`
  display: flex;

  width: 50%;

  font-size: 18px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: justify;
  text-shadow: 0px 0px 10px ${colors.black};

  color: ${colors.whiteOpacity08};
`;

const StoryFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 35px;
`;

const StoryTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  width: 45%;
`;

const StoryTagsTitle = styled.p`
  display: flex;

  margin-right: 10px;

  font-size: 20px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  color: ${colors.whiteOpacity08};

  text-align: justify;
  text-shadow: 0px 0px 10px ${colors.black};
`;

const StoryTag = styled.li`
  display: flex;

  margin-right: 10px;
  margin-bottom: 5px;
  padding: 0 15px;

  font-size: 18px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};

  text-align: justify;
  text-shadow: 0px 0px 10px ${colors.black};

  background: none;

  border: 1px solid ${colors.whiteOpacity05};

  transition: 0.3s ease;

  ${(props) =>
    props.clicked
      ? ``
      : css`
          &:hover {
            cursor: pointer;

            color: ${colors.white};

            border-color: ${colors.whiteOpacity08};
            box-shadow: 2px 2px 0px 0px ${colors.whiteOpacity08};

            transition: 0.3s ease;
          }
        `}
`;

const StoryFooterButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 50%;
`;

const StoryFooterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  margin-left: 15px;
  padding: 10px 25px;

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
    box-shadow: 2px 2px 0px 0px ${colors.whiteOpacity08};

    transition: 0.3s ease;
  }

  &:disabled {
    cursor: default;

    border-color: ${colors.whiteOpacity08};

    opacity: 0.5;

    box-shadow: none;
  }

  ${(props) =>
    props.anyLikes &&
    css`
      svg {
        fill: ${colors.errorColor};
      }
    `}
`;

const StoryFooterLikes = styled.span`
  display: flex;

  margin-left: 10px;

  font-size: 16px;
  line-height: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

const StoryConfirmDialogContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${colors.blackOpacity09};
`;

const StoryConfirmDialog = styled.div`
  display: flex;
  flex-direction: column;

  width: 25%;
`;

const StoryConfirmDialogTitle = styled.p`
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

const StoryConfirmDialogText = styled.p`
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

const StoryConfirmDialogButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;

const StoryConfirmDialogButton = styled.button`
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
  StoryContainer,
  StoryHeader,
  StoryTitle,
  StoryAuthor,
  StoryBody,
  StoryImages,
  StoryImage,
  StoryText,
  StoryFooter,
  StoryTags,
  StoryTagsTitle,
  StoryTag,
  StoryFooterButtons,
  StoryFooterButton,
  StoryFooterLikes,
  StoryConfirmDialogContainer,
  StoryConfirmDialog,
  StoryConfirmDialogTitle,
  StoryConfirmDialogText,
  StoryConfirmDialogButtons,
  StoryConfirmDialogButton,
};
