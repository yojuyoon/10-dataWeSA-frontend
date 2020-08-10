import React, { useState, useEffect } from "react";
import axios from "axios";
import SummarizedInfo from "../Components/Industries/SummarizedInfo";
import About from "../Components/Industries/About";
import WorkForce from "../Components/Industries/WorkForce";
import Occupations from "../Components/Industries/Occupations";
import ChartTable from "../Components/Industries/ChartTable/ChartTable";
import { StatDataAPI } from "../config";

export default function Industries() {
  const [statData, setStatData] = useState([]);

  useEffect(() => {
    axios.get(`${StatDataAPI}/data/industries.json`).then((res) => {
      setStatData(res.data.stat);
    });
  }, []);

  return (
    <>
      <SummarizedInfo statData={statData} />
      <About />
      <WorkForce />
      <Occupations />
      <ChartTable />
    </>
  );
}
