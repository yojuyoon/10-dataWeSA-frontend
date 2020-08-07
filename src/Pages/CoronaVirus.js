import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../Components/DataTable";
import LinePlotComponent from "../Components/LinePlot/LinePlotComponent";
import CoronaMain from "../Components/CoronaMain";
import ChartMap from "../Components/ChartMap/ChartMap";
import { dataTableAPI } from "../config";

function CoronaVirus() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  let [selectedState, setSelectedState] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true);
        setError(null);
        setData(null);
        const response = await axios.get(`${dataTableAPI}`);
        setData(response.data.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    getApi();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return null;

  return (
    <>
      <CoronaMain />
      {data.length && (
        <DataTable
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          data={data}
        />
      )}
      <LinePlotComponent />
      <ChartMap />
    </>
  );
}

export default CoronaVirus;
