import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const AuthorsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 75px 50px 0 50px;
`;

const AuthorsStories = styled.div`
  display: flex;
`;

export { AuthorsContainer, AuthorsStories };
