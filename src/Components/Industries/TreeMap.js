import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Treemap } from "d3plus-react";
import theme from "../../Styles/Theme";
import { methods } from "./methods";
import { treeMapAPI } from "../../config";
import Loading from "../Common/Loading";
import Error from "../Common/Error";

export default function TreeMap() {
  const [data, setData] = useState(methods);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${treeMapAPI}/chart`);
      let tmpData = { ...data, data: response.data.data };
      setData(tmpData);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <TreeMapContainer>
      <TotalNumber>Total: 9.65M</TotalNumber>
      <CustomTreemap config={data} />
    </TreeMapContainer>
  );
}

const TreeMapContainer = styled.div`
  width: 65%;
`;

const TotalNumber = styled.div`
  margin-bottom: 2%;
  text-align: center;
  font-family: ${theme.fontContent};
`;

const CustomTreemap = styled(Treemap)`
  height: 85%;
`;
