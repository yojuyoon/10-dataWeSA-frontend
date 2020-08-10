import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import axios from "axios";
import Loading from "../../Common/Loading";
import HighchartsReact from "highcharts-react-official";
import mapChartOptionPhysician from "./MapChartOptions/mapChartOptionPhysician";
import ChartContainer from "./ChartContainer";

require("highcharts/modules/map")(Highcharts);

function ChartPhysician() {
  const [outputData, setOutputData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://10.58.0.233:8000/bed", {
        timeout: 6000,
      })
      .then((res) => {
        setOutputData(res.data.data);
        setLoading(!loading);
      })
      .catch(() => {
        setError(!error);
      });
    // setOutputData(Testdata);
    // setLoading(!loading);
  }, []);

  mapChartOptionPhysician.series[0].data = outputData;

  if (loading) return <Loading />;
  if (error) return <div>에러가 발생했습니다...</div>;
  if (!outputData) return null;

  return (
    <ChartContainer>
      <HighchartsReact
        options={mapChartOptionPhysician}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </ChartContainer>
  );
}

export default ChartPhysician;
