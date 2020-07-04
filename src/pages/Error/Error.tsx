import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Error.module.sass";

type OwnPropsType = {};

const Error: React.FC<OwnPropsType> = React.memo(() => {
  return (
    <div className={s.errorPage}>
      <h1>Page not found</h1>
      <NavLink className={s.link} to={"/"}>
        Go to home page
      </NavLink>
    </div>
  );
});

export default Error;
