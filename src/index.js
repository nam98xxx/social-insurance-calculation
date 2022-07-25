import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Store/Reducer";
import ListData from "./ListData/listdata";
import Title from "./Header/header";
import Serial from "./STT/stt";
import Buttons from "./Buttons/Buttons";
import { Container } from "@mui/system";
import { StyledEngineProvider } from "@mui/material/styles";
const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancers);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container className={"container"}>
    <Provider store={store}>
      <Title />
      <Serial />
      <StyledEngineProvider injectFirst>
        <ListData />
        <Buttons />
      </StyledEngineProvider>
    </Provider>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
