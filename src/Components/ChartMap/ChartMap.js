import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Servdata from "./Testdata.json";
import mapChartOption from "./mapChartOption";
import axios from "axios";

require("highcharts/modules/map")(Highcharts);

const ChartMap = () => {
  const [outputData, setOutputData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Servdata) {
      setTimeout(() => {
        setOutputData(Servdata);
        setLoading(!loading);
      }, 3000);
    } else {
      setError(!error);
    }
    // axios
    //   .get("url", {
    //     params: {},
    //     timeout: 3000,
    //   })
    //   .then((res) => {
    //     setOutputData(Servdata);
    //     setLoading(!loading);
    //   })
    //   .catch(() => {
    //     setError(!error);
    //   });
  }, []);

  useEffect(() => {
    mapChartOption.series[0].data = outputData;
  }, [outputData]);

  if (loading) return <div>로딩중...</div>;
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
