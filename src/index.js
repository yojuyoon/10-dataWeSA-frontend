import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import theme from "./Styles/Theme";
import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
