import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import theme, { flexCenter } from "../../Styles/Theme";

const Loading = () => {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faSpinner} spin size="4x" />
      <span>Loading Data...</span>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  /* width: 100%; */
  height: 50vh;
  ${flexCenter};
  flex-direction: column;
  color: ${theme.orange};

  span {
    margin-top: 30px;
    font-size: 24px;
    font-family: ${theme.fontContent};
    color: ${theme.navy};
  }
`;

export default Loading;
