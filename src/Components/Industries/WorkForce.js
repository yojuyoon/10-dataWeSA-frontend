import React from "react";
import styled from "styled-components";
import theme from "../../Styles/Theme";

export default function WorkForce() {
  return (
    <WorkForceContainer>
      <WorkForceTitle>WORKFORCE</WorkForceTitle>
      <ParagraphContainer>
        <Paragraph>
          A snapshot of jobs, wages, and opportunities in the Restaurants & Food Services Industry
          Group. <span>Waiters & waitresses</span> are the most common position, but the{" "}
        </Paragraph>
        <Paragraph>
          Restaurants & Food Services Industry Group employs a relatively high number of{" "}
          <span>Food service managers</span>, compared to other industries.{" "}
        </Paragraph>
        <Paragraph>
          The highest average salary in Restaurants & Food Services goes to{" "}
          <span>Construction managers</span>.
        </Paragraph>
      </ParagraphContainer>
    </WorkForceContainer>
  );
}

const WorkForceContainer = styled.div`
  background-color: ${theme.grey};
`;

const WorkForceTitle = styled.h1`
  font-size: 45px;
  font-family: ${theme.fontTitle};
  padding: 4% 0 0 10%;
`;

const ParagraphContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 8% 3% 8%;
`;

const Paragraph = styled.div`
  width: 31%;
  margin: 0 1%;
  line-height: 180%;
  font-size: 17px;
  font-family: ${theme.fontContent};
  color: #484848;

  span {
    text-decoration: underline;
    color: #32415a;
    cursor: pointer;
  }
`;
