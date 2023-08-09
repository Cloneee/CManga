import React from "react";
import { Outlet } from "react-router-dom";

function FullscreenLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default FullscreenLayout;
