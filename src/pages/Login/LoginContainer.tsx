import React from "react";
import { Helmet } from "react-helmet";
import Login from "./Login";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

const LoginContainer: React.FC = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </>
  );
});

export default LoginContainer;
