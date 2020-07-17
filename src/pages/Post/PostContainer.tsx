import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Post from "./Post";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const PostContainer: React.FC = React.memo(() => {
  const { postId } = useParams();
  return (
    <>
      <Helmet>
        <title>Post {postId}</title>
      </Helmet>
      <MainLayout>
        <Post postId={postId} />
      </MainLayout>
    </>
  );
});

export default PostContainer;
