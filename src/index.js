import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "../src/redux/index.js";
import persistStore from "redux-persist/es/persistStore";

// Create a persistor for Redux state persistence
let persistor = persistStore(store);

// Get the root element where the React application will be rendered
const rootElement = document.getElementById("root");

// Create a root for concurrent React rendering
const root = ReactDOM.createRoot(rootElement);

// Render the App component wrapped in various providers for Redux, routing, and state persistence
root.render(
  <Provider store={store}>
    {/* PersistGate delays rendering the application until persisted state has been retrieved and saved to redux */}
    <PersistGate loading={null} persistor={persistor}>
      {/* BrowserRouter provides routing functionality to the App */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
