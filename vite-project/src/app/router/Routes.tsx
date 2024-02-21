import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Homepage from "../../features/homepage/Homepage";
import NewEventsPage from "../../features/newsEvents/NewEventsPage";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import NewEventDetails from "../../features/newsEvents/NewEventDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "newsevent", element: <NewEventsPage /> },
      { path: "newsevent/:id", element: <NewEventDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
