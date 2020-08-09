import React from "react";
import styled from "styled-components";
import ChartMap from "./MapChartComponents/ChartMap";

const ChartMapComponents = () => {
  const list = [1, 2, 3, 4];
  return (
    <MapComponentsContainer>
      {list.map((id) => (
        <ChartMap id={id} />
      ))}
    </MapComponentsContainer>
  );
};

export default ChartMapComponents;

const MapComponentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 0 20px;
`;
