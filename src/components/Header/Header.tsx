import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

const Header: React.FC = React.memo(() => {
  return (
    <header className={`${s.header}`}>
      <NavLink to="/">Index</NavLink>
      <NavLink to="/post/1">Post 1</NavLink>
      <NavLink to="/post/2">Post 2</NavLink>
      <NavLink to="/post/3">Post 3</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registry">Registry</NavLink>
    </header>
  );
});

export default Header;
