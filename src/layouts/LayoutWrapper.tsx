import React, { useContext } from "react";
import "./layout.css";
import { OptionContext } from "../contexts/optionContext";
import FullscreenLayout from "./FullscreenLayout";
import NavbarLayout from "./NavbarLayout";
function LayoutWrapper() {
  const optionContext = useContext(OptionContext);
  if (optionContext?.option.isFullScreen) {
    return <FullscreenLayout />;
  }
  return <NavbarLayout />;
}

export default LayoutWrapper;
