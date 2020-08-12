import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { StatDataAPI } from "../config";
import theme, { flexCenter } from "../Styles/Theme";

function CoronaMain({ handleScrollIntoView }) {
  const [statData, setStatData] = useState([]);

  useEffect(() => {
    axios.get(`${StatDataAPI}/data/coronaMainData.json`).then((res) => {
      setStatData(res.data.stat);
    });
  }, []);

  return (
    <CoronaMainContainer>
      <TitleContainer>
        <h1>COVID-19 IN THE UNITED STATES</h1>
        <h2>Latest Data from Monday, August 3rd</h2>
      </TitleContainer>
      <SponsorContainter>
        <Link to="https://www2.deloitte.com/us/en.html">
          <img alt="logo" src="/images/deloitte.png" />
        </Link>
        <Link to="https://www.datawheel.us/">
          <img alt="logo" src="/images/datawheel.png" />
        </Link>
      </SponsorContainter>
      <RateContainer>
        <RateColumnWrapper>
          {statData.map((stat) => {
            return (
              <RateColumn key={stat.title}>
                <span className="title">{stat.title}</span>
                <span className="value">{stat.value}</span>
                <span className="subTitle">{stat.subTitle}</span>
              </RateColumn>
            );
          })}
        </RateColumnWrapper>
      </RateContainer>
      <TextContainer>
        <div>
          <p>
            Based on publicly available data, how is COVID-19 (also known as
            Coronavirus) spreading in the United States? How fast is it growing
            in each state? And how prepared may different states be to cope with
            the spread of this global pandemic?
          </p>
        </div>
        <div>
          <p>
            At Data USA, our mission is to visualize and distribute open source
            data of U.S. public interest. To track the evolution and trajectory
            of COVID-19, we have created a series of interactive graphics. These
            visualizations are designed to put the spread of COVID-19 in
            context.
          </p>
        </div>
      </TextContainer>
      <PageCategoryContainer>
        <SectionIcon onClick={() => handleScrollIntoView(0)}>
          <img alt="cases" src="/images/cases.svg" />
          <span>Confirmed Cases by State</span>
        </SectionIcon>
        <SectionIcon onClick={() => handleScrollIntoView(1)}>
          <img alt="mobility" src="/images/mobility.svg" />
          <span>Mobility</span>
        </SectionIcon>
        <SectionIcon onClick={() => handleScrollIntoView(2)}>
          <img alt="risks" src="/images/risks.svg" />
          <span>Risks and Readiness</span>
        </SectionIcon>
        <SectionIcon onClick={() => handleScrollIntoView(3)}>
          <img alt="faq" src="/images/faqs.svg" />
          <span>FAQs</span>
        </SectionIcon>
      </PageCategoryContainer>
    </CoronaMainContainer>
  );
}

export default CoronaMain;

const CoronaMainContainer = styled.div`
  padding-top: 100px;
  ${flexCenter};
  flex-direction: column;
  background-color: ${theme.navy};
  color: ${theme.white};
`;

const TitleContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${theme.fontTitle};
  font-size: 60px;

  h1 {
    letter-spacing: 2px;
  }

  h2 {
    color: ${theme.orange};
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const SponsorContainter = styled.div`
  text-align: center;

  img {
    width: 200px;
  }
`;

const RateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const RateColumnWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const RateColumn = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  .title {
    font-size: 12px;
  }

  .value {
    margin: 10px;
    font-size: 35px;
    font-family: ${theme.fontNumber};
  }

  .subTitle {
    font-size: 12px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;

  p {
    width: 350px;
    margin: 0 30px;
    line-height: 20px;
    font-family: ${theme.fontContent};
  }
`;

const PageCategoryContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;

const SectionIcon = styled.div`
  margin: 0 30px;
  ${flexCenter};
  flex-direction: column;
  text-decoration: none;
  color: ${theme.white};
  cursor: pointer;

  img {
    width: 30px;
  }

  span {
    width: 90px;
    font-size: 13px;
    text-align: center;
    line-height: 20px;
    font-family: ${theme.fontContent};
  }
`;
