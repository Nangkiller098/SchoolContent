import { NewsEvents } from "../features/NewsEvents";
import Banner from "./Banner";
import { Footer } from "./Footer";
import { NavbarSimple } from "./Navbar";

function App() {
  return (
    <div>
      <NavbarSimple />
      <Banner />
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg">
        <h1 className="uppercase text-center mt-0">NEWS &amp; EVENTS</h1>
      </div>
      <NewsEvents />
      <Footer />
    </div>
  );
}

export default App;
