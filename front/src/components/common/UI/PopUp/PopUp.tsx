import React from "react";

import { ImCross } from "react-icons/im";

import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

import {
  PopUpContainer,
  PopUpHeader,
  PopUpHeaderImage,
  PopUpCloseButton,
} from "./PopUp.styled";

interface IProps {
  children: React.ReactNode;
  onCloseButtonClick: (showAuthorsStories: boolean) => void;
  avatar: string;
}

const PopUp = ({
  children,
  onCloseButtonClick,
  avatar,
}: IProps): React.ReactElement => {
  const onEscKeyPress = React.useCallback((e) => {
    if (e.keyCode === 27) {
      onCloseButtonClick(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", onEscKeyPress, false);

    return () => {
      document.removeEventListener("keydown", onEscKeyPress, false);
    };
  }, []);

  return (
    <AnimatedWrapper>
      <PopUpContainer>
        <PopUpHeader>
          <PopUpHeaderImage avatar={avatar} />
          <PopUpCloseButton
            onClick={() => {
              onCloseButtonClick(false);
            }}
          >
            <ImCross />
          </PopUpCloseButton>
        </PopUpHeader>
        {children}
      </PopUpContainer>
    </AnimatedWrapper>
  );
};

export default PopUp;
