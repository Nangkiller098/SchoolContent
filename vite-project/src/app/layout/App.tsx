/* eslint-disable react-refresh/only-export-components */
import { Footer } from "./Footer";
import Logo from "./Logo";

import { useEffect } from "react";
import { LoadingComponent } from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import { NavbarWithMegaMenu } from "./Navbar";

function App() {
  const { contentStore } = useStore();

  useEffect(() => {
    contentStore.loadContents();
  }, [contentStore]);

  if (contentStore.loadingInitial) return <LoadingComponent />;

  return (
    <div className=" overflow-hidden">
      <Logo />
      <NavbarWithMegaMenu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default observer(App);
