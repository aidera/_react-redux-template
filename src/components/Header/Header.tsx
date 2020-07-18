import React from "react";
import { NavLink } from "react-router-dom";
import { BsList } from "react-icons/all";
import { useDispatch } from "react-redux";
import s from "./Header.module.scss";
import Button from "../Button/Button";
import { setIsNavbarOpen } from "../../redux/app/app.actions";

const Header: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  return (
    <header className={`${s.header}`}>
      <Button onClick={() => dispatch(setIsNavbarOpen(true))}>
        <BsList />
      </Button>
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
