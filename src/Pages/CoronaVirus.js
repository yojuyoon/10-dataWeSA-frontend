import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import CoronaMain from "../Components/CoronaMain";
import DataTable from "../Components/DataTable";
import Faq from "../Components/Faq";
import Daily from "../Components/Daily/Daily";
import LinePlotComponent from "../Components/LinePlot/LinePlotComponent";
import ChartMapComponents from "../Components/ChartMap/ChartMapComponents";
import Loading from "../Components/Common/Loading";
import Error from "../Components/Common/Error";
import { options } from "../Components/Daily/DailyOptions";
import { categories } from "../Components/Daily/DailySelect";
import { dataTableAPI } from "../config";
import theme from "../Styles/Theme";

function CoronaVirus() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const componentRefs = useRef([]);
  const [selected, setSelected] = useState([3, 8, 14, 21, 25, 33]);
  const [option, setOption] = useState(options);
  const [selectedCategory, setselectedCategory] = useState("Daily New Cases");
  const endPoint = selected.join(",");

  const handleScrollIntoView = (refIndex) => {
    window.scrollTo({
      top: componentRefs.current[refIndex].offsetTop - 40,
      behavior: "smooth",
    });
  };

  const handleCategory = (e) => {
    setselectedCategory(categories[e.target.value]);
  };

  const handleClick = (state) => {
    const selectedIndex = selected.indexOf(state);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, state);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  useEffect(() => {
    if (endPoint.length) {
      getRequest("any");
    }
  }, [selected, selectedCategory]);

  const getRequest = async (indicator) => {
    if (indicator === "first") {
      try {
        setLoading(!loading);
        const response = await axios.get(`${dataTableAPI}/daily/${endPoint}`);
        const seriesData = response.data.data.map((picked) => {
          return {
            title: selectedCategory,
            name: picked.series.name,
            data: picked.series[selectedCategory],
          };
        });

        const temp = { ...option, series: seriesData };
        setOption(temp);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(loading);
      }
    } else {
      try {
        const response = await axios.get(`${dataTableAPI}/daily/${endPoint}`);
        const seriesData = response.data.data.map((picked) => {
          return {
            title: selectedCategory,
            name: picked.series.name,
            data: picked.series[selectedCategory],
          };
        });

        const temp = { ...option, series: seriesData };
        setOption(temp);
      } catch (e) {
        setError(e);
      }
    }
  };

  useEffect(() => {
    getApi();
    getRequest("first");
  }, []);

  const getApi = async () => {
    try {
      const response = await axios.get(`${dataTableAPI}/daily`);
      setData(response.data.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  let dailyResult = null;
  if (loading) {
    dailyResult = <Loading />;
  } else if (error) {
    dailyResult = <Error />;
  } else {
    dailyResult = (
      <Daily
        option={option}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategory={handleCategory}
      />
    );
  }

  return (
    <CoronaContainer>
      <CoronaMain handleScrollIntoView={handleScrollIntoView} />
      <div ref={(el) => (componentRefs.current[0] = el)}>
        {data && (
          <DataTable
            selected={selected}
            setSelected={setSelected}
            data={data}
            handleClick={handleClick}
          />
        )}
      </div>
      {dailyResult}
      <div ref={(el) => (componentRefs.current[1] = el)}>
        <LinePlotComponent endPoint={endPoint} />
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
