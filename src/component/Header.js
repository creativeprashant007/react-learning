import React from "react";
import { NavLink } from "react-router-dom";
import imageLogo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <header
      style={{
        paddingLeft: 50,
        paddingTop: 10,
        background: "linear-gradient(to right, #1abc9c, #3498db)",
        color: "black",
      }}
    >
      <NavLink to="#">
        <img
          style={{
            borderRadius: 20,
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
          }}
          src={imageLogo}
          width="60"
          height="60"
        />
      </NavLink>
      <nav>
        <div>
          <ul
            style={{
              flexDirection: "row",
              flex: 1,
              width: "30%",
              fontSize: 20,
              display: "inline-flex",
              justifyContent: "space-between",
              listStyle: "none",
            }}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
