import React from "react";
import styled from "styled-components";
import theme from "../../Styles/Theme";
import { Link } from "react-router-dom";
import { flexCenter } from "../../Styles/Theme";

export default function SummarizedInfo(props) {
  const { statData } = props;
  return (
    <InfoContainer>
      <TitleContainer>
        <h1>RESTAURANTS & FOOD SERVICES</h1>
      </TitleContainer>
      <Comparison>
        <img alt="comparison" src="/images/svg/compare.svg" />
        <span>ADD COMPARISON</span>
      </Comparison>
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
      <PageCategoryContainer>
        <Link to="/">
          <img alt="cases" src="/images/svg/about.svg" />
          <span>ABOUT</span>
        </Link>
        <Link to="/">
          <img alt="mobility" src="/images/svg/workforce.svg" />
          <span>WORKFORCE</span>
        </Link>
        <Link to="/">
          <img alt="economy" src="/images/svg/demographics.svg" />
          <span>DIVERSITY</span>
        </Link>
        <Link to="/">
          <img alt="risks" src="/images/svg/io.svg" />
          <span>INPUT/OUTPUT</span>
        </Link>
        <Link to="/">
          <img alt="faq" src="/images/svg/growth.svg" />
          <span>PROJECTIONS</span>
        </Link>
      </PageCategoryContainer>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(20, 27, 46, 1.2)),
    url("/images/industries.jpg");
  background-size: 100%;
  background-position: center;
  background-color: rgba(20, 27, 46, 0.5);
  color: ${theme.white};
`;

const TitleContainer = styled.div`
  padding-top: 10%;
  text-align: center;
  font-size: 65px;
  font-family: ${theme.fontTitle};
  text-shadow: 2px 2px 1px ${theme.navy};
`;

const Comparison = styled.div`
  margin: 1% 0;
  letter-spacing: 1px;
  font-size: 14px;
  ${flexCenter};
  font-weight: bold;
  font-family: ${theme.fontContent};
  cursor: pointer;

  span {
    margin-left: 0.5%;
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
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  text-shadow: 2px 2px 5px ${theme.navy};

  .title {
    font-size: 12px;
    font-weight: bold;
  }

  .value {
    margin: 10px;
    font-size: 40px;
    font-family: ${(props) => props.theme.fontNumber};
  }

  .subTitle {
    font-size: 12px;
    font-weight: bold;
  }
`;

const PageCategoryContainer = styled.div`
        margin: 30px 0;
        display: flex;
        justify-content: center;

        a{
          margin: 0 20px;
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
