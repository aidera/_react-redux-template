import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Error: React.FC = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <MainLayout>
        <div>
          <h1>Page not found</h1>
          <NavLink to="/">Go to home page</NavLink>
        </div>
      </MainLayout>
    </>
  );
});

export default Error;
