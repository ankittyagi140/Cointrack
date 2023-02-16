import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

import "../src/styles/commons.scss";
import Routing from "./routing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>
);
