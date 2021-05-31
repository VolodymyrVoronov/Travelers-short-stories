import React from "react";

import { useStoriesStore } from "./../../store/stories";

import Story from "./../Story/Story";
import LoadingSpinner from "../common/UI/LoadingSpinner/LoadingSpinner";
import NoStories from "../common/UI/NoStories/NoStories";

import { StoriesContainer } from "./Stories.styled";

const Stories = (): React.ReactElement => {
  const {
    stories,
    loadingStories,
  }: { stories: string[] | any; loadingStories: boolean } = useStoriesStore();

  return (
    <StoriesContainer>
      {loadingStories ? (
        <LoadingSpinner />
      ) : (
        <>
          {stories.length === 0 && <NoStories />}
          {stories.map(
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
        </>
      )}
    </StoriesContainer>
  );
};

export default Stories;
