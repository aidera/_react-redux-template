import React from "react";
import { NavLink } from "react-router-dom";

const Error: React.FC = React.memo(() => {
  return (
    <div>
      <h1>Page not found</h1>
      <NavLink to="/">Go to home page</NavLink>
    </div>
  );
});

export default Error;
