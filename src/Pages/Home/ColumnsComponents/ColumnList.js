import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../../Styles/Theme";
import { FaIndustry } from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import { RiBankLine, RiLightbulbLine } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import Column from "./Column";

const ColumnList = (props) => {
  const { title, list, id } = props.columData;

  return (
    <ColumnListContainer>
      <TitleContainer>
        {id === 0 && <RiLightbulbLine size="30" color="white" />}
        {id === 1 && <BsGeoAlt size="30" color="white" />}
        {id === 2 && <FaIndustry size="30" color="white" />}
        {id === 3 && <MdWork size="30" color="white" />}
        {id === 4 && <RiBankLine size="30" color="white" />}

        <a>{title}</a>
      </TitleContainer>

      {list.map((colum, index) => (
        <Column key={index} colum={colum} />
      ))}
    </ColumnListContainer>
  );
};

const ColumnListContainer = styled.div`
  width: 260px;
  height: 1000px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  width: 260px;
  height: 50px;
  ${flexCenter};
  margin-bottom: 5px;

  a {
    color: white;
    margin: 0px 10px;
    font-size: 25px;

    img {
      width: 35px;
      height: 35px;
      margin: 0px;
      background: rgba(0, 0, 0, 0);
    }
  }
`;

export default ColumnList;
