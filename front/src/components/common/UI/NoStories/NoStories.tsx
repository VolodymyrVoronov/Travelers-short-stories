import React from "react";

import { ImFileEmpty } from "react-icons/im";

import {
  NoStoriesContainer,
  NoStoriesTitle,
  NoStoriesIcon,
} from "./NoStories.styled";

const NoStories = (): React.ReactElement => {
  return (
    <NoStoriesContainer>
      <NoStoriesTitle>No stories found.</NoStoriesTitle>
      <NoStoriesIcon>
        <ImFileEmpty />
      </NoStoriesIcon>
    </NoStoriesContainer>
  );
};

export default NoStories;
