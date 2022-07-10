import React from "react";
import { NavLink } from "react-router-dom";
import {logout} from "../api"

function NavList(props) {
    const {isLoggedIn, setUserToken, setIsLoggedIn} = props;

const handleLogout = () => {
  console.log('logout has been clicked my guy')
  logout(setUserToken, setIsLoggedIn);
} 

  return ( 
    <div id="header">
      <h1 id="header-text">Stranger's Things</h1>
      <nav>
        <ul>
        <li>
            <NavLink
              to="/"
          
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink
              to="posts"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Posts
            </NavLink>
          </li>
          {isLoggedIn ? <> <li>
            <NavLink
              to="profile"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Profile
            </NavLink>
          </li> <li><NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              onClick={handleLogout}
            >
              Log Out
            </NavLink> </li></>: null}
        </ul>
      </nav>
    </div>
  );
}

export default NavList;
