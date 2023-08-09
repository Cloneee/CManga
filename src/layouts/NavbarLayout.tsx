import React from "react";
import { Outlet } from "react-router-dom";

function NavbarLayout() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <button>
              <i className="ri-menu-line"></i>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <h3 className="title">CManga</h3>
          </li>
        </ul>
        <ul>
          <li>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            />
          </li>
          <li>
            <button className="outline">
              <i className="ri-login-box-line"></i>
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavbarLayout;
