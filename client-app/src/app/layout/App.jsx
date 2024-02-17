import { Footer } from "./Footer";
import { NavbarSimple } from "./Navbar";

import Homepage from "../features/Homepage/Homepage";

function App() {
  return (
    <div className=" overflow-hidden">
      <NavbarSimple />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
