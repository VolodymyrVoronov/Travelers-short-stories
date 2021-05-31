import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { LoadingSpinnerContainer } from "./LoadingSpinner.styled";

const LoadingSpinner = (): React.ReactElement => {
  return (
    <LoadingSpinnerContainer>
      <Loader type="Triangle" color="#ffffff" height={250} width={250} />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
