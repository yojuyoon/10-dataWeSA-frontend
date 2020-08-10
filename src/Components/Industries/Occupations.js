import React from "react";
import styled from "styled-components";
import TreeMap from "./TreeMap";
import theme from "../../Styles/Theme";

export default function Occupations() {
  return (
    <OccupationsContainer>
      <OccupationContainer>OCCUPATIONS</OccupationContainer>
      <Main>
        <Content>
          <h1>Occupations by Share</h1>
          <section className="value">
            <article>
              <div>11.9M</div>
              <div>WORKFORCE (BLS ESTIMATE)</div>
              <div>ACS Estimate: 9.68M</div>
            </article>
            <article>
              <div>0.288%</div>
              <div>1 YEAR GROWTH</div>
              <div>± 1.08%</div>
            </article>
          </section>
          <ContentParagraph>
            <article>
              The Bureau of Labor Statistics estimates that there were 11.9M people employed in the
              Restaurants & Food Services Industry Group in 2018.
            </article>
            <article>
              According to ACS estimates, the number of people employed in the Restaurants & Food
              Services Industry Group has been growing at a rate of 0.288%, , from 9.65M people in
              2017 to 9.68M people in 2018.
            </article>
            <article>
              The following graphic shows the share of employment in Restaurants & Food Services by
              various occupations according to ACS estimates. <span>Waiters & waitresses</span>{" "}
              represent the largest share of positions held in Restaurants & Food Services at 21.1%,
              followed by <span>Cooks</span> with 17.7% and <span>Food service managers</span> with
              8.95%.
            </article>
            <article>
              Data from <span>the Census Bureau</span> <span>ACS PUMS 1-Year Estimate</span>
            </article>
          </ContentParagraph>
        </Content>
        <TreeMap>22</TreeMap>
      </Main>
    </OccupationsContainer>
  );
}

const OccupationsContainer = styled.div`
  background-color: ${theme.grey};
`;

const OccupationContainer = styled.div`
  font-family: ${theme.fontTitle};
  font-size: 36px;
  text-align: center;
  padding-bottom: 5%;
`;

const Main = styled.div`
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 31%;

  h1 {
    font-size: 30px;
    font-family: ${theme.fontTitle};
    margin-bottom: 7%;
  }

  section {
    display: flex;

    article {
      width: 50%;

      div {
        margin-bottom: 2%;
        font-size: 12px;

        :first-child {
          font-family: ${theme.fontNumber};
          font-size: 33px;
        }

        :nth-child(2) {
          font-weight: bold;
          color: #1b191d;
        }
      }
    }
  }
`;

const ContentParagraph = styled.div`
  article {
    margin-top: 3%;
    color: #484848;
    line-height: 140%;
    font-family: ${theme.fontContent};

    &:last-child {
      color: #727682;
      font-size: 12px;

      span {
        &:last-child {
          color: ${theme.black};
        }
      }
    }
  }

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
