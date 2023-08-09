import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
function MainLayout() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#" className="secondary">
              …
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Brand</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="secondary">
              …
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
