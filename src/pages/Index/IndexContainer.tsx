import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Index from "./Index";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { getPosts } from "../../redux/post/post.selectors";
import Modal from "../../components/Modal/Modal";
import { loadPosts } from "../../redux/post/post.actions";

const IndexContainer: React.FC = React.memo(() => {
  const posts = useSelector(getPosts);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (status: boolean) => {
    setIsModalOpen(status);
  };

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
        setIsOpen={openModal}
        text="Custom modal with any text you want"
        buttonResolveText="Resolve"
        buttonRejectText="Reject"
        promiseResolve={promise}
        promiseResolveError="this is an error in resolve"
        promiseReject={promise2}
        promiseRejectError="this is an error in reject"
      />
      <MainLayout>
        <Index
          posts={posts}
          setIsModalOpen={setIsModalOpen}
          loadData={loadData}
        />
      </MainLayout>
    </>
  );
});

export default IndexContainer;
