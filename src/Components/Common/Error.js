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
  width: 400px;
  height: 50vh;
  margin: 0 auto;
  ${flexCenter};
  flex-direction: column;
  font-size: 55px;
  color: ${theme.orange};

  span {
    margin-top: 30px;
    font-size: 24px;
    color: ${theme.navy};
    font-family: ${theme.fontContent};
  }
`;

export default Error;
