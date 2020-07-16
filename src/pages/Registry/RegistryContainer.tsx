import React from "react";
import { Helmet } from "react-helmet";
import Registry from "./Registry";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";

const RegistryContainer: React.FC = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>Registry page</title>
      </Helmet>
      <AuthLayout>
        <Registry />
      </AuthLayout>
    </>
  );
});

export default RegistryContainer;
