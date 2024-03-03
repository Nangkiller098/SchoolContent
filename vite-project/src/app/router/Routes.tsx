import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import Homepage from "../../features/homepage/Homepage";
import NewEventDetails from "../../features/newsEvents/details/NewEventDetails";
import NewEventsDashboard from "../../features/newsEvents/NewEventsDashboard";
import NotFoundPage from "../layout/Not-Found-page";
import NewsEventForm from "../../features/newsEvents/form/NewsEventForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "content", element: <NewEventsDashboard /> },
      { path: "content/:id", element: <NewEventDetails /> },
      {
        path: "createContent",
        element: <NewsEventForm key={"createContent"} />,
      },
      {
        path: "manageContent/:id",
        element: <NewsEventForm key={"manageContent"} />,
      },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
