import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import Loading from "../Common/Loading";
import HighchartsReact from "highcharts-react-official";
import mapChartOption from "./mapChartOption";
import axios from "axios";

require("highcharts/modules/map")(Highcharts);

const ChartMap = () => {
  const [outputData, setOutputData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://10.58.4.3:8080/hospital/beds", {
        timeout: 6000,
      })
      .then((res) => {
        setOutputData(res.data.data);
        setLoading(!loading);
      })
      .catch(() => {
        setError(!error);
      });
  }, []);

  useEffect(() => {
    mapChartOption.series[0].data = outputData;
  }, [outputData]);

  if (loading) return <Loading />;
  if (error) return <div>에러가 발생했습니다...</div>;
  if (!outputData) return null;

  return (
    <HighchartsReact
      options={mapChartOption}
      constructorType={"mapChart"}
      highcharts={Highcharts}
    />
  );
};

export default ChartMap;
