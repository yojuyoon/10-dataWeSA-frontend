import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { flexCenter } from "../../Styles/Theme";

const Loading = () => {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faSpinner} spin size="5x" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  width: 100%;
  height: 50vh;
  ${flexCenter};
`;

export default Loading;
