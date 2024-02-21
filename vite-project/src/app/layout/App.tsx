import Homepage from "../../features/homepage/Homepage";
import { Footer } from "./Footer";
import Logo from "./Logo";
import { NavbarSimple } from "./Navbar";

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
