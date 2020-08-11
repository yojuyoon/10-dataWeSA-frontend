import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { chartDataAPI } from "../../config";
import { options } from "./MobilityChartOptions";
import Loading from "../../Components/Common/Loading";
import Error from "../../Components/Common/Error";
import theme from "../../Styles/Theme";

function LinePlotComponent() {
  const [optionData, setOptionData] = useState(options);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const categories = [
    "Grocery and Pharmacy",
    "Parks",
    "Retail and Recreation",
    "Transit Stations",
    "Workplaces",
  ];
  const [selectedCategory, setselectedCategory] = useState(
    "Grocery and Pharmacy"
  );

  const handleCategory = (e) => {
    setselectedCategory(categories[e.target.value]);
  };

  const fetchData = async () => {
    try {
      setLoading(!loading);
      const response = await axios.get(
        `${chartDataAPI}/mobility?place=${selectedCategory}`
      );
      let tmpOption = { ...optionData, series: response.data.series };
      setOptionData(tmpOption);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(loading);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  if (loading) return <Loading />;
  if (error) return <Error />;
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
            <select
              onChange={(e) => handleCategory(e)}
              className="PlaceCategory"
            >
              {categories.map((place, key) => (
                <option
                  value={key}
                  selected={selectedCategory === place && "selected"}
                >
                  {place}
                </option>
              ))}
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
          <p className="sourceGroup">
            Data from the Google LLC "Google COVID-19 Community Mobility Reports
            <a href="https://www.google.com/covid19/mobility/">
              " https://www.google.com/​covid19/​mobility/
            </a>
          </p>
        </LeftContainer>
        <HighchartsReact highcharts={Highcharts} options={optionData} />
      </Container>
    </Wrapper>
  );
}

export default LinePlotComponent;

const Wrapper = styled.div`
  background-color: ${theme.lightgrey};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  line-height: 25px;
  color: ${theme.fontColor};

  h1 {
    margin: 20px 0;
    text-align: center;
    font-family: ${theme.fontTitle};
    font-size: 45px;
  }

  p {
    width: 400px;
    font-family: ${theme.fontContent};
    font-size: 16px;
    color: rgba(45, 45, 45, 0.8);
  }
`;

const Container = styled.main`
  display: flex;
  justify-content: center;
  color: ${theme.fontColor};

  p {
    margin-top: 20px;
    line-height: 20px;
    font-family: ${theme.fontContent};
    font-size: 15px;
    color: ${theme.fontColor};
  }
`;

const LeftContainer = styled.div`
  width: 300px;
  margin-right: 20px;

  h2 {
    margin-bottom: 20px;
    font-family: ${theme.fontTitle};
    font-size: 30px;
  }

  .sourceGroup {
    font-size: 12px;
    color: rgba(45, 45, 45, 0.8);

    a {
      font-style: italic;
      color: rgba(45, 45, 45, 0.8);
    }
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
