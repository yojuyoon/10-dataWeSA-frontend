import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root"),
);
