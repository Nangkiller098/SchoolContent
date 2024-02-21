import { Footer } from "./Footer";
import { NavbarSimple } from "./Navbar";

import Homepage from "../features/Homepage/Homepage";
import Logo from "./Logo";

function App() {
  return (
    <div className=" overflow-hidden">
      <Logo />
      <NavbarSimple />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
