import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";
import GlobalStyles from "./Styles/GlobalStyles";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root"),
);
