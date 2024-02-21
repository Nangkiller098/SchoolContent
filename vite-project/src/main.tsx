import React from "react";
import ReactDOM from "react-dom/client";

import "./app/layout/index.css";
import App from "./app/layout/App";
import { ThemeProvider } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
