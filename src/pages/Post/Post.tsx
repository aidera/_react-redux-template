import React from "react";

interface PropsType {
  postId: string;
}

const Post: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { postId } = props;
  return (
    <div>
      <h1>Post - {postId}</h1>
    </div>
  );
});

export default Post;
