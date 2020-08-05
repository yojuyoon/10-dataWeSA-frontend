import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { StatDataAPI } from "../config";
import styled from "styled-components";
import { flexCenter } from "../Styles/Theme";

function CoronaMain() {
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
            Based on publicly available data, how is COVID-19 (also known as Coronavirus) spreading
            in the United States? How fast is it growing in each state? And how prepared may
            different states be to cope with the spread of this global pandemic?
          </p>
        </div>
        <div>
          <p>
            At Data USA, our mission is to visualize and distribute open source data of U.S. public
            interest. To track the evolution and trajectory of COVID-19, we have created a series of
            interactive graphics. These visualizations are designed to put the spread of COVID-19 in
            context.
          </p>
        </div>
      </TextContainer>
      <PageCategoryContainer>
        <Link to="/">
          <img alt="cases" src="/images/cases.svg" />
          <span>Confirmed Cases by State</span>
        </Link>
        <Link to="/">
          <img alt="mobility" src="/images/mobility.svg" />
          <span>Mobility</span>
        </Link>
        <Link to="/">
          <img alt="economy" src="/images/economy.svg" />
          <span>Economic Impact</span>
        </Link>
        <Link to="/">
          <img alt="risks" src="/images/risks.svg" />
          <span>Risks and Readiness</span>
        </Link>
        <Link to="/">
          <img alt="faq" src="/images/faqs.svg" />
          <span>FAQs</span>
        </Link>
      </PageCategoryContainer>
    </CoronaMainContainer>
  );
}

export default CoronaMain;

const CoronaMainContainer = styled.div`
  background-color: ${(props) => props.theme.navy};
  color: ${(props) => props.theme.white};
  ${flexCenter};
  flex-direction: column;
  padding-top: 60px;
`;

const TitleContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontTitle};
  font-size: 60px;

  h2 {
    color: ${(props) => props.theme.orange};
    font-size: 24px;
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
    font-family: ${(props) => props.theme.fontNumber};
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
    font-family: ${(props) => props.theme.fontContent};
  }
`;

const PageCategoryContainer = styled.div`
        margin: 30px 0;
        display: flex;
        justify-content: center;

        a{
          margin: 0 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: ${(props) => props.theme.white}
        }

        img{
            width: 30px;
        }

        span{
            width: 90px;
            font-size: 13px;
            text-align: center;
            line-height: 20px;
            font-family: ${(props) => props.theme.fontContent}
        }
    }
`;
