import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import CoronaMain from "../Components/CoronaMain";
import DataTable from "../Components/DataTable";
import Daily from "../Components/Daily";
import Faq from "../Components/Faq";
import LinePlotComponent from "../Components/LinePlot/LinePlotComponent";
import ChartMapComponents from "../Components/ChartMap/ChartMapComponents";
import Loading from "../Components/Common/Loading";
import Error from "../Components/Common/Error";
import { dataTableAPI } from "../config";
import theme from "../Styles/Theme";

function CoronaVirus() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState([]);
  const componentRefs = useRef([]);

  const handleScrollIntoView = (refIndex) => {
    window.scrollTo({
      top: componentRefs.current[refIndex].offsetTop - 40,
      behavior: "smooth",
    });
  };

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
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <CoronaContainer>
      <CoronaMain handleScrollIntoView={handleScrollIntoView} />
      {data.length && (
        <div ref={(el) => (componentRefs.current[0] = el)}>
          <DataTable
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            data={data}
          />
        </div>
      )}
      <Daily />
      <div ref={(el) => (componentRefs.current[1] = el)}>
        <LinePlotComponent />
      </div>
      <div ref={(el) => (componentRefs.current[2] = el)}>
        <ChartMapComponents />
      </div>
      <div ref={(el) => (componentRefs.current[3] = el)}>
        <Faq />
      </div>
    </CoronaContainer>
  );
}

export default CoronaVirus;

const CoronaContainer = styled.div`
  background-color: ${theme.midgrey};
`;
