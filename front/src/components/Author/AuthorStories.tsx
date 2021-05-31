import React from "react";

import Story from "./../Story/Story";
import NoStories from "../common/UI/NoStories/NoStories";

import { AuthorStoriesContainer } from "../common/UI/PopUp/PopUp.styled";

interface StoryByAuthors {
  _id: string;
  author: string;
  storyTitle: string;
  storyText: string;
  storyPhoto: string;
  storyTags: string;
  likes: string;
  creator: string;
}

interface IProps {
  storiesByAuthors: StoryByAuthors[];
}

const AuthorStories = ({ storiesByAuthors }: IProps): React.ReactElement => {
  return (
    <AuthorStoriesContainer>
      {storiesByAuthors.length === 0 && <NoStories />}
      {storiesByAuthors.map(
        (story: {
          _id: string;
          author: string;
          storyTitle: string;
          storyText: string;
          storyPhoto: string;
          storyTags: string;
          likes: string;
          creator: string;
        }) => {
          const {
            _id,
            author,
            storyTitle,
            storyText,
            storyPhoto,
            storyTags,
            likes,
            creator,
          } = story;
          return (
            <Story
              key={_id}
              id={_id}
              author={author}
              storyTitle={storyTitle}
              storyText={storyText}
              storyPhoto={storyPhoto}
              storyTags={storyTags}
              likes={likes}
              creator={creator}
            />
          );
        }
      )}
    </AuthorStoriesContainer>
  );
};

export default AuthorStories;
