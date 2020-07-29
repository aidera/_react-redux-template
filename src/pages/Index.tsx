import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal/Modal";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { getPosts } from "../redux/post/post.selectors";
import { loadPosts } from "../redux/post/post.actions";
import Button from "../components/Button/Button";
import { ColorEnum } from "../types/Theme";

const Index: React.FC = React.memo(() => {
  const posts = useSelector(getPosts);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const loadData = () => {
    dispatch(loadPosts());
  };

  const promise = () =>
    new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      setTimeout(() => {
        if (randomNumber < 0.6) {
          resolve(null);
        } else {
          reject(new Error("Oops"));
        }
      }, 2000);
    });
  const promise2 = () =>
    new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      setTimeout(() => {
        if (randomNumber < 0.6) {
          resolve("OK!");
        } else {
          reject(new Error("Oops"));
        }
      }, 2000);
    });

  return (
    <>
      <Helmet>
        <title>Index page</title>
      </Helmet>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        text="Custom modal with any text you want"
        buttonResolveText="Resolve"
        buttonRejectText="Reject"
        promiseResolve={promise}
        promiseResolveError="this is an error in resolve"
        promiseReject={promise2}
        promiseRejectError="this is an error in reject"
      />
      <MainLayout>
        <h1>Index page</h1>
        <Button
          type="button"
          variant="fill"
          color={ColorEnum.warning}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Open modal
        </Button>
        <div>
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
          <Button
            type="button"
            variant="fill"
            color={ColorEnum.success}
            onClick={loadData}
          >
            Load Posts
          </Button>
        </div>
      </MainLayout>
    </>
  );
});

export default Index;
