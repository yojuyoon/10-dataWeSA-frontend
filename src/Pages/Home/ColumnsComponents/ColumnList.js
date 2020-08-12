import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../../Styles/Theme";
import { FaIndustry } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import {
  RiBankLine,
  RiLightbulbLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import { MdWork } from "react-icons/md";
import Column from "./Column";

const ColumnList = ({ title, list, id }) => {
  const idObj = {
    0: <RiLightbulbLine size="30" color="white" />,
    1: <BsGeoAlt size="30" color="white" />,
    2: <FaIndustry size="30" color="white" />,
    3: <MdWork size="30" color="white" />,
    4: <RiBankLine size="30" color="white" />,
    5: <RiShoppingCartLine size="30" color="white" />,
  };

  return (
    <ColumnListContainer>
      <TitleContainer>
        {idObj[id]}
        <a>{title}</a>
      </TitleContainer>

      {list.map((column, index) => (
        <Column key={index} name={column.name} src={column.src} />
      ))}
    </ColumnListContainer>
  );
};

const ColumnListContainer = styled.div`
  width: 230px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  width: 230px;
  height: 50px;
  margin-bottom: 5px;
  ${flexCenter};

  a {
    color: white;
    margin: 0px 10px;
    font-size: 25px;
    ${flexCenter};

    img {
      width: 35px;
      height: 35px;
      margin: 0px;
    }
  }
`;

export default ColumnList;
