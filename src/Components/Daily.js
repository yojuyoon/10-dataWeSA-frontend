import React from "react";
import styled from "styled-components";
import DailyChart from "./DailyChart";
import theme from "../Styles/Theme";

function Daily() {
  return (
    <DailyWrapper>
      <DailyContainer>
        <DailyInfo>
          <div className="title">Daily New Cases</div>
          <div className="subTitle">
            <SpanSubTitle>Y-AXIS SCALE</SpanSubTitle>
            <div className="wrapper">
              <Button>Linear</Button>
              <Button>Logarithmic</Button>
            </div>
          </div>
          <div className="subTitle">
            <SpanSubTitle>INDICATOR</SpanSubTitle>
            <div className="wrapper">
              <Select>
                <option>Daily New Cases</option>
                <option>Confirmed Cases</option>
                <option>Deaths</option>
                <option>Hospitalizations</option>
                <option>Tests</option>
                <option>% Positive Tests</option>
              </Select>
            </div>
          </div>
          <div className="checkBoxes">
            <div>
              <input type="checkbox" />
              7-day Rolling Average
            </div>
            <div>
              <input type="checkbox" />
              Per Capita
            </div>
            <div>
              <input type="checkbox" />
              Shift Time Axis
            </div>
            <div>
              <input type="checkbox" disabled="true" />
              International Comparison
            </div>
          </div>
          <Content>
            Because of the exponential nature of early epidemic spreading, it is
            important to track not only the total number of COVID-19 cases, but
            their growth.
          </Content>
          <Content>
            This chart presents the number of new cases reported daily by each
            U.S. state.
          </Content>
          <Content type="small">
            For more information about the difference between linear and
            logarithmic scale, <SpanUnderline>click here.</SpanUnderline>
          </Content>
          <Content type="small">
            Data from{" "}
            <SpanUnderline>
              the COVID Tracking Project Coronavirus numbers by state.
            </SpanUnderline>
          </Content>
        </DailyInfo>
        <DailyChart />
      </DailyContainer>
    </DailyWrapper>
  );
}

export default Daily;

const DailyWrapper = styled.div`
  margin-top: 5%;
  background-color: ${theme.midgrey};
`;

const DailyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 4%;
  padding-bottom: 5%;
`;

const DailyInfo = styled.div`
  width: 22%;
  height: 30%;
  margin-right: 2%;
  .title {
    font-family: ${theme.fontTitle};
    font-size: 30px;
    margin-bottom: 10px;
  }

  .subTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
    height: 30px;

    .wrapper {
      width: 70%;
      height: 100%;
    }
  }

  .checkBoxes {
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    color: ${theme.orange};

    div {
      margin: 0 0 2% 30%;
    }
  }
`;

const Content = styled.div`
  font-size: ${(props) => (props.type === "small" ? "11px" : "15px")};
  line-height: ${(props) => (props.type === "small" ? "" : "150%")};
  margin-bottom: ${(props) => (props.type === "small" ? "4%" : "5%")};
  font-family: ${(props) => (props.type === "small" ? "" : theme.fontContent)};
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid grey;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
`;

const SpanSubTitle = styled.span`
  font-size: 13px;
  font-weight: bold;
  font-family: ${theme.fontContent};
`;

const SpanUnderline = styled.span`
  text-decoration: underline;
  color: ${theme.black};
  cursor: pointer;
`;
