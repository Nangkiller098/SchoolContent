import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import Logo from "./Logo";
import { NavbarSimple } from "./Navbar";

function App() {
  return (
    <div className=" overflow-hidden">
      <Logo />
      <NavbarSimple />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
