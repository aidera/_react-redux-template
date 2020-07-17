import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Post: React.FC = React.memo(() => {
  const { postId } = useParams();
  return (
    <>
      <Helmet>
        <title>Post {postId}</title>
      </Helmet>
      <MainLayout>
        <div>
          <h1>Post - {postId}</h1>
        </div>
      </MainLayout>
    </>
  );
});

export default Post;
