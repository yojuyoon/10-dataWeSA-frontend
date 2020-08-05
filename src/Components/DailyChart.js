import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { options } from "./DailyOptions";

function DailyChart() {
  const [option, setOption] = useState(options);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(()=> {
  //   getRequest();
  // },[])

  // const getRequest = async () => {
  //   try {
  //     setError(null);
  //     setUsers(null);
  //     setLoading(true);

  //     const response = await axios.get(`{}/DailyChart`);
  //     const temp = {...options, series:response.data.series};
  //     setOptions(temp);
  //   } catch (e) {
  //     setError(e);
  //   }
  //   setLoading(false);
  // }

  return (
    <DailyChartContainer>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </DailyChartContainer>
  );
}

export default DailyChart;

const DailyChartContainer = styled.div`
  width: 78%;
`;
