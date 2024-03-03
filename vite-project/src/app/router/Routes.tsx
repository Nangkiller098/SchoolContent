import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import Homepage from "../../features/homepage/Homepage";
import NewEventDetails from "../../features/newsEvents/details/NewEventDetails";
import NewEventsDashboard from "../../features/newsEvents/NewEventsDashboard";
import NotFoundPage from "../layout/Not-Found-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "content", element: <NewEventsDashboard /> },
      { path: "content/:id", element: <NewEventDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      // { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
