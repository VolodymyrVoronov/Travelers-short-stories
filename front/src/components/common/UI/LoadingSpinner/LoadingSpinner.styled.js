import styled from "styled-components";

import { device } from "./../../../../styles/breakPoints";

const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 35px;

  @media ${device.mobileS} {
    margin-top: 25px;
  }

  @media ${device.mobileM} {
    margin-top: 30px;
  }

  @media ${device.mobileL} {
    margin-top: 35px;
  }
`;

export { LoadingSpinnerContainer };
