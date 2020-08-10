import React from "react";
import styled from "styled-components";
import theme from "../../Styles/Theme";
import ChartMapBed from "./MapChartComponents/ChartMapBed";
import ChartMapICU from "./MapChartComponents/ChartMapICU";
import ChartMapRegister from "./MapChartComponents/ChartMapRegister";
import ChartPhysician from "./MapChartComponents/ChartPhysician";

const MapComponents = () => {
  return (
    <>
      <Title>RISKS AND READINESS</Title>
      <MapComponentsContainer>
        <ChartMapBed />
        <ChartMapICU />
        <ChartMapRegister />
        <ChartPhysician />
      </MapComponentsContainer>
    </>
  );
};

export default MapComponents;
const Title = styled.h1`
  margin-top: 50px;
  font-size: 40px;
  font-family: ${theme.fontTitle};
  text-align: center;
`;

const MapComponentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  margin: 40px 20px 0px 20px;
`;
