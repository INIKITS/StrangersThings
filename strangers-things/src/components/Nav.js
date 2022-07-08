import React from 'react'
import { NavLink } from "react-router-dom";

function NavList() {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div id='header'>
        <h1 id='header-text'>Stranger's Things</h1>
    <nav>
      <ul>
        <li>
          <NavLink
            to="Posts"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Profile"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                home
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default NavList;