import React from "react";
import { Helmet } from "react-helmet";
import Error from "./Error";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const ErrorContainer: React.FC = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <MainLayout>
        <Error />
      </MainLayout>
    </>
  );
});

export default ErrorContainer;
