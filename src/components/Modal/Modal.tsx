import React from "react";
import { CSSTransition } from "react-transition-group";
import s from "./Modal.module.scss";
import Overlay from "../Overlay/Overlay";

interface IProps {
  setIsOpen: (status: boolean) => void;
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = React.memo((props: IProps) => {
  const { setIsOpen, isOpen, children } = props;

  const closeModal = async () => {
    setIsOpen(false);
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="toggleOpacity"
      unmountOnExit
      onEnter={() => setIsOpen(true)}
      onExited={() => setIsOpen(false)}
    >
      <div className={s.modal}>
        <Overlay onClick={closeModal} />
        <div className={s.modalCard}>{children}</div>
      </div>
    </CSSTransition>
  );
});

export default Modal;
