import React, { useEffect, useState } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import Loading from "../../Common/Loading";
import Error from "../../Common/Error";
import tableOption from "./tableOption";
import { chartTableAPI } from "../../../config";
import theme from "../../../Styles/Theme";

const ChartTable = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(chartTableAPI)
      .then((res) => {
        setTableData(res.data.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <ChartTableContainer>
      <LeftContainer>
        <h2>Wage by Race & Ethnicity in Common Jobs</h2>
        <LeftCategory>
          <span>RACE OR ETHNICITY WITH THE HIGHEST AVERAGE SALARY </span>
        </LeftCategory>

        <ol>
          <li>
            <p>Asian</p>
          </li>
          <li>
            <p>Other</p>
          </li>
          <li>
            <p>White</p>
          </li>
        </ol>

        <p>
          On average, Asian employees in the Restaurants & Food Services Industry Group earn 1.21
          times more than other races and ethnicities. This chart shows the race and ethnicity-based
          wage disparities in the 5 most common occupations in the Restaurants & Food Services
          Industry Group.
        </p>
        <p className="sourceGroup">
          Data from the Census Bureau
          <a href="https://www.census.gov/programs-surveys/acs/technical-documentation/pums.html">
            ACS PUMS 1-Year Estimate.
          </a>
        </p>
      </LeftContainer>
      <HighchartsReact highcharts={Highcharts} options={tableOption(tableData)} />
    </ChartTableContainer>
  );
};

export default ChartTable;

const ChartTableContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 60px;
  color: ${theme.fontColor};
  background-color: ${theme.grey};

  p {
    margin-top: 20px;
    line-height: 20px;
    font-family: ${theme.fontContent};
    font-size: 15px;
    color: ${theme.fontColor};
  }
`;

const LeftContainer = styled.div`
  width: 500px;
  margin-right: 20px;

  h2 {
    margin-bottom: 20px;
    font-family: ${theme.fontTitle};
    font-size: 30px;
  }

  ol {
    li {
      p {
        font-size: 24px;
      }
    }
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
