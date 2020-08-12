import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getHomeData } from "../../../config";
import Column from "./Column";
import axios from "axios";

const ColumnList = ({ datas, cart }) => {
  const [columnData, setColumnData] = useState([]);

  useEffect(() => {
    axios
      .get(`${getHomeData}/product`)
      .then((response) => setColumnData(response.data.message));
  }, []);

  return (
    <ColumnListContainer>
      {columnData.map((data) => (
        <Column key={data.id} data={data} />
      ))}
    </ColumnListContainer>
  );
};

const ColumnListContainer = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const mapStateToProps = (state) => {
  return {
    datas: state.data.datas,
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(ColumnList);
