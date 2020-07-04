import React, { useState } from "react";
import s from "./Index.module.sass";
import Modal from "../../components/Modal/Modal";

type OwnPropsType = {};

const Index: React.FC<OwnPropsType> = React.memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (status: boolean) => {
    setIsModalOpen(status);
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

      <div className={s.indexPage}>
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
      </div>
    </>
  );
});

export default Index;
