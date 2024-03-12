import ReactDOM from "react-dom/client";

import "./app/layout/index.css";

import { ThemeProvider } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StoreContext, store } from "./app/stores/store";
import { router } from "./app/router/Routes";
import { RouterProvider } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
