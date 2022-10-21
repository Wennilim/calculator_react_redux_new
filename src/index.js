import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import calculatorSlice from "./redux/Slices/calculatorSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
