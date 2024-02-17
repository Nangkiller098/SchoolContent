import { NewsEvents } from "../features/Homepage/NewsEvents";
// import Responsive from "../features/Responsive";
import Banner from "../features/Homepage/Banner";
import { Footer } from "./Footer";
import { NavbarSimple } from "./Navbar";
import { Learning } from "../features/Homepage/Learning";

function App() {
  return (
    <>
      <NavbarSimple />
      <Banner />
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">NEWS &amp; EVENTS</a>
        </h1>
      </div>
      <NewsEvents />
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">Learning & Resource</a>
        </h1>
      </div>
      <Learning />

      <Footer />
    </>
  );
}

export default App;
