import ReactDOM from "react-dom/client";

import "./app/layout/index.css";

import { ThemeProvider } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./app/router/Routes";
import App from "./app/layout/App";
import { StoreContext, store } from "./app/stores/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider>
    {/* <RouterProvider router={router} /> */}
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
