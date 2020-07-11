import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header: React.FC = React.memo(() => {
  return (
    <header className={`${s.header}`}>
      <NavLink to="/">Index</NavLink>
      <NavLink to="/item/1">Item 1</NavLink>
      <NavLink to="/item/2">Item 2</NavLink>
      <NavLink to="/item/3">Item 3</NavLink>
      <NavLink to="/login">Login</NavLink>
    </header>
  );
});

export default Header;
