import React from "react";
import styled from "styled-components";
import theme from "../../Styles/Theme";

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>ABOUT</AboutTitle>
      <ParagraphContainer>
        <Paragraph>
          The top three occupations in the Restaurants & Food Services Industry Group are{" "}
          <span>Waiters & waitresses, Cooks, Food service managers, Cashiers,</span> and{" "}
          <span>Food preparation workers.</span> On average, full-time employees in the Restaurants
          & Food Services Industry Group work 42.9 hours per week and have an average
        </Paragraph>
        <Paragraph>
          <p>
            annual salary of $32,261. Part-time employees in the same industry work 22 hours and
            earn an average annual salary of $10,493.
          </p>
          <p>
            The locations with the highest concentration of employees in the Restaurants & Food
            Services Industry Group are <span>Tallahassee City </span>
          </p>
        </Paragraph>
        <Paragraph>
          <span>(Central) PUMA, FL, San Diego City (Central/Mid-City) PUMA, CA</span>, and{" "}
          <span>Kalamazoo & Portage Cities Area PUMA, MI</span>. The industry that purchases the
          most products or services from the Hospitals Industry Group is Restaurants & Food
          Services.
        </Paragraph>
        <Paragraph>
          <div>PHOTO BY WILLOWBROOKHOTELS</div>
          <div>
            ARTS, ENTERTAINMENT & RECREATION AND ACCOMMODATION & FOOD SERVICES ACCOMMODATION & FOOD
            SERVICES
          </div>
        </Paragraph>
      </ParagraphContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  background-color: ${theme.navy};
  color: ${theme.white};
`;

const AboutTitle = styled.h1`
  font-size: 45px;
  font-family: ${theme.fontTitle};
  padding: 5% 0 0 11%;
`;

const ParagraphContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 3% 3% 3%;
`;

const Paragraph = styled.div`
  width: 24%;
  margin: 0 1%;
  line-height: 180%;
  font-size: 17px;
  font-family: ${theme.fontContent};
  color: ${theme.grey};

  span {
    text-decoration: underline;
    color: #cfedff;
    cursor: pointer;
  }

  &:last-child {
    width: 15%;
    margin-left: 5%;
    font-size: 11px;

    div {
      margin-bottom: 5%;
      line-height: 200%;
    }
  }
`;
