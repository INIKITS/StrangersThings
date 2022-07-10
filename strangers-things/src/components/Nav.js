import React from "react";
import { NavLink } from "react-router-dom";

function NavList(props) {
    const {isLoggedIn} = props;

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return ( 
    <div id="header">
      <h1 id="header-text">Stranger's Things</h1>
      <nav>
        <ul>
          <li class="nav-text">
            <NavLink
              to="posts"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Posts
            </NavLink>
          </li>
          {isLoggedIn ?  <li>
            <NavLink
              to="profile"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Profile
            </NavLink>
          </li> : null}
         
          <li>
            <NavLink
              to="/"
              exact={true}
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavList;
