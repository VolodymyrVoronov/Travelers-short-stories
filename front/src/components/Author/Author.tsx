import React from "react";

import { useStoriesStore } from "./../../store/stories";

import AnimatedWrapper from "../common/UI/AnimatedWrapper/AnimatedWrapper";
import PopUp from "../common/UI/PopUp/PopUp";
import LoadingSpinner from "../common/UI/LoadingSpinner/LoadingSpinner";
import AuthorStories from "./AuthorStories";

import {
  AuthorContainer,
  AuthorAvatar,
  AuthorName,
  AuthorButton,
} from "./Author.styled";

interface IProps {
  fullName: string;
  avatar: string;
  _id: string;
}

const Author = ({ fullName, avatar, _id }: IProps): React.ReactElement => {
  const {
    storiesByAuthors,
    getStoriesByAuthor,
    loadingStories,
  }: {
    storiesByAuthors: [];
    getStoriesByAuthor: (authorId: string) => void;
    loadingStories: boolean;
  } = useStoriesStore();

  const [showAuthorsStories, setShowAuthorsStories] =
    React.useState<boolean>(false);

  const onReadStoriesButtonClick = () => {
    getStoriesByAuthor(_id);
    setShowAuthorsStories(true);
  };

  return (
    <AnimatedWrapper>
      <AuthorContainer>
        <AuthorAvatar avatar={avatar} />
        <AuthorName>{fullName}</AuthorName>
        <AuthorButton onClick={onReadStoriesButtonClick} type="button">
          Read stories
        </AuthorButton>
        {showAuthorsStories && (
          <PopUp onCloseButtonClick={setShowAuthorsStories} avatar={avatar}>
            {loadingStories ? (
              <LoadingSpinner />
            ) : (
              <AuthorStories storiesByAuthors={storiesByAuthors} />
            )}
          </PopUp>
        )}
      </AuthorContainer>
    </AnimatedWrapper>
  );
};

export default Author;
