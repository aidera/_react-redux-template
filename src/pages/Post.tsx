import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { useDispatch } from "react-redux";
import { addPost, deletePost } from "../redux/post/post.actions";
import { ColorEnum } from "../types/Theme";
import Button from "../components/Button/Button";

const Post: React.FC = React.memo(() => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(
      addPost({
        id: 1000,
        body: "this is body post",
        title: "title of 1000 post",
        userId: 1,
      })
    );
  };

  const handleClickDelete = () => {
    dispatch(deletePost(1000));
  };

  return (
    <>
      <Helmet>
        <title>Post {postId}</title>
      </Helmet>
      <MainLayout>
        <div>
          <h1>Post - {postId}</h1>
          <Button
            type="button"
            variant="fill"
            color={ColorEnum.success}
            onClick={handleClickAdd}
          >
            Add Post
          </Button>
          <Button
            type="button"
            variant="fill"
            color={ColorEnum.warning}
            onClick={handleClickDelete}
          >
            Delete Post
          </Button>
        </div>
      </MainLayout>
    </>
  );
});

export default Post;
