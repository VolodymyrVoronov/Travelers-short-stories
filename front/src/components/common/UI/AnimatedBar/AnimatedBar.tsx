import React from "react";

import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

import { AnimatedBarContainer } from "./AnimatedBar.styled";

const AnimatedBar = (): React.ReactElement => {
  return (
    <AnimatedWrapper duration={100}>
      <div>
        <AnimatedBarContainer />
      </div>
    </AnimatedWrapper>
  );
};

export default AnimatedBar;
