import React from "react";
import { IPost } from "../../types/Post";

interface IProps {
  posts: IPost[];
  setIsModalOpen: (status: boolean) => void;
  loadData: () => void;
}

const Index: React.FC<IProps> = React.memo((props: IProps) => {
  const { posts, setIsModalOpen, loadData } = props;
  return (
    <>
      <div>
        <h1>Index page</h1>
        <button
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="button-type-1"
        >
          Open modal
        </button>
        <div>
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
          <button type="button" onClick={loadData}>
            Load Posts
          </button>
        </div>
      </div>
    </>
  );
});

export default Index;
