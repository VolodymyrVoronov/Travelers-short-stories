import styled from "styled-components";

import { device } from "./../../styles/breakPoints";

const AuthorsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 75px 50px 0 50px;

  @media ${device.mobileS} {
    margin: 25px 10px 0 10px;
  }

  @media ${device.mobileL} {
    margin: 30px 15px 0 15px;
  }

  @media ${device.tablet} {
    margin: 40px 25px 0 25px;
  }

  @media ${device.laptop} {
    margin: 50px 35px 0 35px;
  }

  @media ${device.laptopL} {
    margin: 75px 50px 0 50px;
  }
`;

const AuthorsStories = styled.div`
  display: flex;
`;

export { AuthorsContainer, AuthorsStories };
