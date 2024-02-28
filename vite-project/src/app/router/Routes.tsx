import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import Homepage from "../../features/homepage/Homepage";
// import NewEventDetails from "../../features/newsEvents/details/NewEventDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      // { path: "content", element: <NewsEventPage /> },
      // { path: "content/:id", element: <NewEventDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <h1>404 page not found</h1> },
    ],
  },
]);
