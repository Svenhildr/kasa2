import React from "react";
import "./Header.scss";
import Logo from "../../Assets/Logo";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <Logo />
        </Link>
        <div className="headerNav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "headerNavActive" : "headerNavInactive"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "headerNavActive" : "headerNavInactive"
            }
          >
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
//
