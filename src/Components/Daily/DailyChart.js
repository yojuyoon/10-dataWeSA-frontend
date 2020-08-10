import React from "react";
import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function DailyChart(props) {
  return (
    <DailyChartContainer>
      <HighchartsReact highcharts={Highcharts} options={props.option} />
    </DailyChartContainer>
  );
}

export default DailyChart;

const DailyChartContainer = styled.div`
  width: 78%;
`;
