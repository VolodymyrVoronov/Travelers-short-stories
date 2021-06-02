import styled from "styled-components";

import { colors } from "./../../../../styles/colorsPalette";

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const ErrorPageTitle = styled.p`
  display: flex;
  justify-content: center;

  font-size: 32px;
  line-height: 36px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: center;

  color: ${colors.whiteOpacity08};
`;

const ErrorPageText = styled.p`
  display: flex;
  justify-content: center;

  margin-top: 15px;

  font-size: 20px;
  line-height: 36px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: center;

  color: ${colors.whiteOpacity08};
`;

const ErrorPageIcon = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 15px;

  font-size: 50px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};
`;

export { ErrorPageContainer, ErrorPageTitle, ErrorPageText, ErrorPageIcon };
