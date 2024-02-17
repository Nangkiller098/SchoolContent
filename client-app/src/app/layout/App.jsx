import { NewsEvents } from "../features/Homepage/NewsEvents";
// import Responsive from "../features/Responsive";
import Banner from "../features/Homepage/Banner";
import { Footer } from "./Footer";
import { NavbarSimple } from "./Navbar";

function App() {
  return (
    <>
      <NavbarSimple />
      <Banner />
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">NEWS &amp; EVENTS</h1>
      </div>
      <NewsEvents />
      {/* <Responsive /> */}
      <Footer />
    </>
  );
}

export default App;
