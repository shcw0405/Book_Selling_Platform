import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainApp from "./MainApp.tsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);
