import React from "react";

import { useStoriesStore } from "./../../store/stories";

import Story from "../Story/Story";
import AnimatedWrapper from "../common/UI/AnimatedWrapper/AnimatedWrapper";
import LoadingSpinner from "../common/UI/LoadingSpinner/LoadingSpinner";
import NoStories from "./../common/UI/NoStories/NoStories";

import { BestStoriesContainer, BestStoriesTitle } from "./BestStories.styled";

const BestStories = (): React.ReactElement => {
  const {
    stories,
    loadingStories,
  }: { stories: string[] | any; loadingStories: boolean } = useStoriesStore();

  return (
    <AnimatedWrapper>
      <BestStoriesContainer>
        {loadingStories ? (
          <LoadingSpinner />
        ) : (
          <>
            {stories.length !== 0 && (
              <BestStoriesTitle>Top 5 most liked stories</BestStoriesTitle>
            )}
            {stories.length === 0 && <NoStories />}
            {stories
              .slice(0, 5)
              .map(
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
      </BestStoriesContainer>
    </AnimatedWrapper>
  );
};

export default BestStories;
