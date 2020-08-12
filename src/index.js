import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./redux/reducers/rootReducer";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";
import GlobalStyles from "./Styles/GlobalStyles";

const store = createStore(rootReducer, composeWithDevTools());

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
