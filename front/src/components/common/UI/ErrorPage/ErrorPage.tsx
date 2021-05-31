import React from "react";

import { ImSad } from "react-icons/im";

import {
  ErrorPageContainer,
  ErrorPageTitle,
  ErrorPageText,
  ErrorPageIcon,
} from "./ErrorPage.styled";

const ErrorPage = (): React.ReactElement => {
  return (
    <ErrorPageContainer>
      <ErrorPageTitle>Oops!</ErrorPageTitle>
      <ErrorPageText>Something went wrong!</ErrorPageText>
      <ErrorPageText>Refresh the page and try one more time.</ErrorPageText>
      <ErrorPageIcon>
        <ImSad />
      </ErrorPageIcon>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
