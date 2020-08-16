import React, { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown";
import dataMoudule from "highcharts/modules/data";
import highchartsMap from "highcharts/modules/map";
import ChartContainer from "./ChartContainer";
import Loading from "../../Common/Loading";
import Error from "../../Common/Error";
import mapOptions from "./MapChartOptions/mapOptions";
import { chartMapAPI } from "../../../config";

highchartsMap(Highcharts);
drilldown(Highcharts);
dataMoudule(Highcharts);

const ChartMap = ({ id }) => {
  const [outputData, setOutputData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultOption, setResultOption] = useState({});

  useEffect(() => {
    let api = "";

    if (id === 1) api = `${chartMapAPI}/bed`;
    if (id === 2) api = `${chartMapAPI}/icu`;
    if (id === 3) api = `${chartMapAPI}/icu`;
    if (id === 4) api = `${chartMapAPI}/icu`;

    axios
      .get(api, {
        timeout: 6000,
      })
      .then((res) => {
        setOutputData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let option = mapOptions(id, outputData);
    setResultOption(option);
  }, [outputData]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!outputData) return null;

  return (
    <ChartContainer>
      <HighchartsReact
        options={resultOption}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </ChartContainer>
  );
};

export default ChartMap;
