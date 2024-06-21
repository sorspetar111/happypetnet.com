import { StrictMode } from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./ServiceWorker";

import App from "./App";

const rootElement = document.getElementById("root");
registerServiceWorker();
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
