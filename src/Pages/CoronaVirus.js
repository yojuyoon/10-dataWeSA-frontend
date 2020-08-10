import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CoronaMain from "../Components/CoronaMain";
import DataTable from "../Components/DataTable";
import Daily from "../Components/Daily";
import LinePlotComponent from "../Components/LinePlot/LinePlotComponent";
import ChartMap from "../Components/ChartMap/ChartMap";
import theme from "../Styles/Theme";
import { dataTableAPI } from "../config";

function CoronaVirus() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  let [selectedState, setSelectedState] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${dataTableAPI}`);
      setData(response.data.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return null;

  return (
    <CoronaContainer>
      <CoronaMain />
      {data.length && (
        <DataTable
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          data={data}
        />
      )}
      <Daily />
      <LinePlotComponent />
      <ChartMap />
    </CoronaContainer>
  );
}

export default CoronaVirus;

const CoronaContainer = styled.div`
  background-color: ${theme.midgrey};
`;
