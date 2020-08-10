import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { chartDataAPI } from "../../config";
import { options } from "./MobilityChartOptions";
import { flexCenter } from "../../Styles/Theme";

function LinePlotComponent() {
  const [optionData, setOptionData] = useState(options);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${chartDataAPI}/mobility?place=Grocery and Pharmacy`
      );
      let tmpOption = { ...optionData, series: response.data.series };
      setOptionData(tmpOption);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error)
    return (
      <Error>
        <img alt="error" src="/images/error.png"></img>에러가 발생했습니다...
      </Error>
    );
  console.log(options);
  if (!optionData) return null;

  return (
    <Wrapper>
      <Title>
        <div className="topContainer">
          <h1>MOBILITY</h1>
          <p>
            Mobility data helps policymakers, local government and executives
            make informed decisions on COVID-19 restrictions and reopening.
          </p>
        </div>
      </Title>
      <Container>
        <LeftContainer>
          <h2>Community Mobility</h2>
          <LeftCategory>
            <span>PLACE CATEGORY</span>
            <select className="PlaceCategory">
              <option value="Northeastern">Grocery and Pharmacy</option>
              <option value="Western">Parks</option>
              <option value="Midwest">Retail and Recreation</option>
              <option value=" South"> Transit Stations</option>
              <option value=" South"> Workplaces</option>
            </select>
          </LeftCategory>
          <p>
            This chart shows how visits and length of stay to Workplace have
            changed over time compared to a baseline.
          </p>
          <p>
            Baselines are calculated using aggregated and anonymized data to
            show popular times for places in Google Maps. Changes for each day
            are compared to a baseline value for that day of the week.
          </p>
        </LeftContainer>
        <HighchartsReact highcharts={Highcharts} options={optionData} />
      </Container>
    </Wrapper>
  );
}

export default LinePlotComponent;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.lightgrey};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  line-height: 25px;
  color: ${(props) => props.theme.fontColor};

  h1 {
    margin: 20px 0;
    text-align: center;
    font-family: ${(props) => props.theme.fontTitle};
    font-size: 45px;
  }

  p {
    width: 400px;
    font-family: ${(props) => props.theme.fontContent};
    font-size: 16px;
    color: rgba(45, 45, 45, 0.8);
  }
`;

const Container = styled.main`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.fontColor};

  p {
    margin-top: 20px;
    line-height: 20px;
    font-family: ${(props) => props.theme.fontContent};
    font-size: 15px;
    color: ${(props) => props.theme.fontColor};
  }
`;

const LeftContainer = styled.div`
  width: 300px;
  margin-right: 20px;

  h2 {
    margin-bottom: 20px;
    font-family: ${(props) => props.theme.fontTitle};
    font-size: 30px;
  }
`;

const LeftCategory = styled.div`
  margin: 20px 0;

  span {
    font-size: 13px;
    font-weight: bold;
  }

  select {
    width: 170px;
    height: 35px;
    margin-left: 10px;
    color: rgba(45, 45, 45, 0.5);
    border: 1px solid rgba(45, 45, 45, 0.5);
    outline: none;
  }
`;

const Error = styled.div`
  ${flexCenter}
  img {
    width: 90px;
  }
`;
