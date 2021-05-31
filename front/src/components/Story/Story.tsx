import React from "react";
// @ts-ignore
import ModalImage from "react-modal-image";
import { confirmAlert } from "react-confirm-alert";

import { ImBin2, ImHeart } from "react-icons/im";

import { useStoriesStore } from "./../../store/stories";
import { useAuthorsStore } from "./../../store/authors";

import AnimatedWrapper from "../common/UI/AnimatedWrapper/AnimatedWrapper";

import placeHolder from "./../../assets/placeHolder01.jpg";

import {
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
} from "./Story.styled";

interface IProps {
  id: string;
  author: string;
  storyTitle: string;
  storyText: string;
  storyPhoto: string;
  storyTags: string;
  likes: string;
  creator: string;
}

const Story = ({
  id,
  author,
  storyTitle,
  storyText,
  storyPhoto,
  storyTags,
  likes,
  creator,
}: IProps): React.ReactElement => {
  const {
    deleteStory,
    likeStory,
    getStoriesByTag,
    isLiking,
  }: {
    deleteStory: (id: string) => void;
    likeStory: (id: string) => void;
    getStoriesByTag: (tag: string) => void;
    isLiking: boolean;
  } = useStoriesStore();

  const { onAuthorStoriesClicked }: { onAuthorStoriesClicked: boolean } =
    useAuthorsStore();

  const onTagButtonClick = (tag: string) => {
    getStoriesByTag(tag);
  };

  const onDeleteButtonClick = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AnimatedWrapper duration={500}>
            <StoryConfirmDialogContainer onClick={onClose}>
              <StoryConfirmDialog>
                <StoryConfirmDialogTitle>Are you sure?</StoryConfirmDialogTitle>
                <StoryConfirmDialogText>
                  You want to delete this story?
                </StoryConfirmDialogText>

                <StoryConfirmDialogButtons>
                  <StoryConfirmDialogButton type="button" onClick={onClose}>
                    No
                  </StoryConfirmDialogButton>
                  <StoryConfirmDialogButton
                    type="button"
                    onClick={() => {
                      deleteStory(id);
                      onClose();
                    }}
                  >
                    Yes, delete it!
                  </StoryConfirmDialogButton>
                </StoryConfirmDialogButtons>
              </StoryConfirmDialog>
            </StoryConfirmDialogContainer>
          </AnimatedWrapper>
        );
      },
    });
  };

  const onLikeButtonClick = () => {
    likeStory(id);
  };

  const user = JSON.parse(localStorage.getItem("profile") || "{}");

  return (
    <AnimatedWrapper>
      <StoryContainer>
        <StoryHeader>
          <StoryTitle>{storyTitle}</StoryTitle>
          <StoryAuthor>{author}</StoryAuthor>
        </StoryHeader>
        <StoryBody>
          <StoryImages>
            <StoryImage>
              <ModalImage
                small={storyPhoto || placeHolder}
                large={storyPhoto || placeHolder}
              />
            </StoryImage>
          </StoryImages>

          <StoryText>{storyText}</StoryText>
        </StoryBody>
        <StoryFooter>
          <StoryTags>
            {storyTags[0].length !== 0 ? (
              <>
                <StoryTagsTitle>Tags:</StoryTagsTitle>
                {onAuthorStoriesClicked ? (
                  <>
                    {storyTags
                      .toString()
                      .split(",")
                      .map((tag, index) => (
                        <StoryTag
                          clicked={onAuthorStoriesClicked || false}
                          key={tag + index}
                        >
                          {tag}
                        </StoryTag>
                      ))}
                  </>
                ) : (
                  <>
                    {storyTags
                      .toString()
                      .split(",")
                      .map((tag, index) => (
                        <StoryTag
                          key={tag + index}
                          onClick={() => onTagButtonClick(tag)}
                        >
                          {tag}
                        </StoryTag>
                      ))}
                  </>
                )}
              </>
            ) : (
              ``
            )}
          </StoryTags>

          <StoryFooterButtons>
            {user?.result?._id === creator && (
              <StoryFooterButton
                onClick={onDeleteButtonClick}
                disabled={isLiking || user?.result === undefined}
              >
                <ImBin2 />
              </StoryFooterButton>
            )}

            <StoryFooterButton
              onClick={onLikeButtonClick}
              anyLikes={likes.length > 0}
              disabled={isLiking || user?.result === undefined}
            >
              <ImHeart />
              {likes.length > 0 ? (
                <StoryFooterLikes>{likes.length}</StoryFooterLikes>
              ) : (
                ``
              )}
            </StoryFooterButton>
          </StoryFooterButtons>
        </StoryFooter>
      </StoryContainer>
    </AnimatedWrapper>
  );
};

export default Story;
