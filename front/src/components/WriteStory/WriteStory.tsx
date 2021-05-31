import React from "react";
import { useHistory } from "react-router-dom";
// @ts-ignore
import FileBase from "react-file-base64";
import { confirmAlert } from "react-confirm-alert";

import { useStoriesStore } from "./../../store/stories";

import { IStory } from "../../types/types";

import AnimatedWrapper from "../common/UI/AnimatedWrapper/AnimatedWrapper";

import {
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
} from "./WriteStory.styled";

type FormState = {
  storyTitle: string;
  storyText: string;
  storyTags: string;
  storyPhoto: string;
};

const WriteStory = (): React.ReactElement => {
  const history = useHistory();
  const { writeStory }: { writeStory: (newStory: IStory) => void } =
    useStoriesStore();

  const initialFormState = {
    storyTitle: ``,
    storyText: ``,
    storyTags: ``,
    storyPhoto: ``,
  };

  const [story, setStory] = React.useState<FormState>(initialFormState);

  const clearForm = () => {
    setStory({ storyTitle: ``, storyText: ``, storyTags: ``, storyPhoto: `` });
  };

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStory({
      ...story,
      [e.target.name]: e.target.value,
    });
  };

  const authorOfStory = JSON.parse(localStorage.getItem("profile") || "{}");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AnimatedWrapper duration={500}>
            <WriteStoryConfirmDialogContainer onClick={onClose}>
              <WriteStoryConfirmDialog>
                <WriteStoryConfirmDialogTitle>
                  Are you sure?
                </WriteStoryConfirmDialogTitle>
                <WriteStoryConfirmDialogText>
                  You want to publish this story?
                </WriteStoryConfirmDialogText>

                <WriteStoryConfirmDialogButtons>
                  <WriteStoryConfirmDialogButton
                    type="button"
                    onClick={onClose}
                  >
                    No
                  </WriteStoryConfirmDialogButton>
                  <WriteStoryConfirmDialogButton
                    type="button"
                    onClick={() => {
                      writeStory({
                        ...story,
                        author: authorOfStory?.result?.fullName,
                      });
                      clearForm();
                      onClose();
                      history.replace("/main/stories");
                    }}
                  >
                    Yes, publish it!
                  </WriteStoryConfirmDialogButton>
                </WriteStoryConfirmDialogButtons>
              </WriteStoryConfirmDialog>
            </WriteStoryConfirmDialogContainer>
          </AnimatedWrapper>
        );
      },
    });
  };

  const onClearButtonClick = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AnimatedWrapper duration={500}>
            <WriteStoryConfirmDialogContainer onClick={onClose}>
              <WriteStoryConfirmDialog>
                <WriteStoryConfirmDialogTitle>
                  Are you sure?
                </WriteStoryConfirmDialogTitle>
                <WriteStoryConfirmDialogText>
                  You want to clear all fields?
                </WriteStoryConfirmDialogText>

                <WriteStoryConfirmDialogButtons>
                  <WriteStoryConfirmDialogButton
                    type="button"
                    onClick={onClose}
                  >
                    No
                  </WriteStoryConfirmDialogButton>
                  <WriteStoryConfirmDialogButton
                    type="button"
                    onClick={() => {
                      clearForm();
                      onClose();
                    }}
                  >
                    Yes, clear them!
                  </WriteStoryConfirmDialogButton>
                </WriteStoryConfirmDialogButtons>
              </WriteStoryConfirmDialog>
            </WriteStoryConfirmDialogContainer>
          </AnimatedWrapper>
        );
      },
    });
  };

  const checkDisabled = () => {
    if (
      story.storyTitle?.length === 0 ||
      story.storyText?.length === 0 ||
      story.storyTags?.length === 0
    )
      return true;
    return false;
  };

  const onEscKeyPress = React.useCallback((e) => {
    if (e.keyCode === 27) {
      clearForm();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", onEscKeyPress, false);

    return () => {
      document.removeEventListener("keydown", onEscKeyPress, false);
    };
  }, []);

  return (
    <AnimatedWrapper>
      <WriteStoryContainer>
        <WriteStoryTitle>Write your short story</WriteStoryTitle>
        <WriteStoryForm onSubmit={onFormSubmit}>
          <WriteStoryFormTitle>
            <WriteStoryFormTitleLabel>Story title: *</WriteStoryFormTitleLabel>
            <WriteStoryFormTitleInput
              name="storyTitle"
              type="text"
              value={story.storyTitle}
              onChange={onFormInputChange}
              placeholder="Name of my story"
            />
          </WriteStoryFormTitle>

          <WriteStoryFormText>
            <WriteStoryFormTextLabel>Your story: *</WriteStoryFormTextLabel>
            <WriteStoryFormTextInput
              name="storyText"
              type="text"
              value={story.storyText}
              onChange={onFormInputChange}
              rows="5"
              placeholder="Text of your story"
            />
          </WriteStoryFormText>

          <WriteStoryFormPhoto>
            <WriteStoryFormPhotoLabel>
              Your story's photo (max. 1 photo):
            </WriteStoryFormPhotoLabel>
            <FileBase
              type="file"
              multiple={false}
              required
              onDone={({ base64 }: any) =>
                setStory({ ...story, storyPhoto: base64 })
              }
            />
          </WriteStoryFormPhoto>

          <WriteStoryFormTags>
            <WriteStoryFormTagsLabel>
              Tags (coma separated): *
            </WriteStoryFormTagsLabel>
            <WriteStoryFormTagsInput
              name="storyTags"
              type="text"
              value={story.storyTags}
              onChange={onFormInputChange}
              placeholder="Tag 1, tag 2, tag 3"
            />
          </WriteStoryFormTags>
          <WriteStoryFormRequired>
            * These fields are required.
          </WriteStoryFormRequired>

          <WriteStoryFormButtons>
            <WriteStoryFormButton
              type="button"
              onClick={onClearButtonClick}
              disabled={checkDisabled()}
            >
              Clear
            </WriteStoryFormButton>
            <WriteStoryFormButton type="submit" disabled={checkDisabled()}>
              Publish
            </WriteStoryFormButton>
          </WriteStoryFormButtons>
        </WriteStoryForm>
      </WriteStoryContainer>
    </AnimatedWrapper>
  );
};

export default WriteStory;
