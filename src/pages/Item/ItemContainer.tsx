import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Item from "./Item";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const IndexContainer: React.FC = React.memo(() => {
  const { itemId } = useParams();
  return (
    <>
      <Helmet>
        <title>Item {itemId}</title>
      </Helmet>
      <MainLayout>
        <Item itemId={itemId} />
      </MainLayout>
    </>
  );
});

export default IndexContainer;
