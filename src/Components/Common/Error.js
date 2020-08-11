import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import theme, { flexCenter } from "../../Styles/Theme";

const Error = () => {
  return (
    <ErrorContainer>
      <FontAwesomeIcon icon={faExclamationTriangle} />
      <span>Error Occurred</span>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  width: 100%;
  height: 50vh;
  ${flexCenter};
  font-size: 55px;
  flex-direction: column;
  color: ${theme.orange};

  span {
    margin-top: 30px;
    color: ${theme.navy};
    font-size: 24px;
    font-family: ${theme.fontContent};
  }
`;

export default Error;
