import React, { useEffect, useRef, useState } from "react";
import s from "./Modal.module.scss";
import Preloader from "../Preloader/Preloader";
import Overlay from "../Overlay/Overlay";
import show from "../../assets/utils/animations/show";
import hide from "../../assets/utils/animations/hide";
import Button from "../Button/Button";
import { ColorEnum } from "../../types/Theme";

/* Modal windows that can be without buttons, with 1 resolve/reject button or 2 buttons */
/* Made with class component because of show-animation in beginning and loading state inside
(when state in func have changed component rerenders and begin show-animation again) */

interface IProps {
  text?: string | null;
  buttonResolveText?: string;
  buttonRejectText?: string;
  callbackResolve?: (() => void) | undefined;
  callbackReject?: (() => void) | undefined;
  callbackCancel?: (() => void) | undefined;
  promiseResolve?: () => Promise<string | number | null | unknown>;
  promiseReject?: () => Promise<string | number | null | unknown>;
  promiseCancel?: () => Promise<string | number | null | unknown>;
  promiseResolveError?: string | null;
  promiseRejectError?: string | null;
  promiseCancelError?: string | null;
  setIsOpen: (status: boolean) => void;
  isOpen: boolean;
}

const Modal: React.FC<IProps> = React.memo((props: IProps) => {
  const {
    text,
    buttonResolveText,
    buttonRejectText,
    callbackResolve,
    callbackReject,
    callbackCancel,
    promiseResolve,
    promiseReject,
    promiseCancel,
    promiseResolveError,
    promiseRejectError,
    promiseCancelError,
    setIsOpen,
    isOpen,
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const [isPromiseResolveError, setIsPromiseResolveError] = useState(false);
  const [isPromiseRejectError, setIsPromiseRejectError] = useState(false);
  const [isPromiseCancelError, setIsPromiseCancelError] = useState(false);
  const [isOpening, setIsOpening] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isOpen && isOpening) {
      show(modalRef.current);
      setIsOpening(false);
    }
  }, [isOpening, isOpen]);

  const closeModal = async () => {
    if (modalRef !== null) {
      await hide(modalRef.current, () => {
        setIsFetching(false);
        setIsPromiseResolveError(false);
        setIsPromiseRejectError(false);
        setIsPromiseCancelError(false);
        setIsOpen(false);
        setIsOpening(true);
      });
    }
  };

  const cancelModal = async () => {
    if (promiseCancel) {
      setIsFetching(true);
      setIsPromiseResolveError(false);
      setIsPromiseRejectError(false);
      setIsPromiseCancelError(false);
      if (callbackCancel) {
        callbackCancel();
      }
      if (promiseCancel) {
        promiseCancel()
          .then(() => {
            closeModal();
          })
          .catch(() => {
            setIsPromiseCancelError(true);
            setIsFetching(false);
          });
      }
    } else {
      if (callbackCancel) {
        callbackCancel();
      }
      closeModal();
    }
  };

  const resolveModal = async () => {
    if (promiseResolve) {
      setIsFetching(true);
      setIsPromiseResolveError(false);
      setIsPromiseRejectError(false);
      setIsPromiseCancelError(false);
      if (callbackResolve) {
        callbackResolve();
      }
      if (promiseResolve) {
        promiseResolve()
          .then(() => {
            closeModal();
          })
          .catch(() => {
            setIsPromiseResolveError(true);
            setIsFetching(false);
          });
      }
    } else {
      if (callbackResolve) {
        callbackResolve();
      }
      closeModal();
    }
  };

  const rejectModal = async () => {
    if (promiseReject) {
      setIsFetching(true);
      setIsPromiseResolveError(false);
      setIsPromiseRejectError(false);
      setIsPromiseCancelError(false);
      if (callbackReject) {
        callbackReject();
      }
      if (promiseReject) {
        promiseReject()
          .then(() => {
            closeModal();
          })
          .catch(() => {
            setIsPromiseRejectError(true);
            setIsFetching(false);
          });
      }
    } else {
      if (callbackReject) {
        callbackReject();
      }
      closeModal();
    }
  };

  return (
    <div ref={modalRef} className={s.modal}>
      <Overlay onClick={cancelModal} />
      <div className={s.modal__card}>
        <span>{text}</span>

        {isPromiseResolveError && promiseResolveError && (
          <div className={s.error}>
            {promiseResolveError || "Oops... something wrong"}
          </div>
        )}

        {isPromiseRejectError && promiseRejectError && (
          <div className={s.error}>
            {promiseRejectError || "Oops... something wrong"}
          </div>
        )}

        {isPromiseCancelError && promiseCancelError && (
          <div className={s.error}>
            {promiseCancelError || "Oops... something wrong"}
          </div>
        )}

        <div className={s.buttons}>
          {isFetching && <Preloader />}

          {!!buttonResolveText && !isFetching && (
            <Button
              variant="fill"
              color={ColorEnum.success}
              type="button"
              onClick={resolveModal}
            >
              {buttonResolveText || "Yes"}
            </Button>
          )}

          {!!buttonRejectText && !isFetching && (
            <Button
              variant="fill"
              color={ColorEnum.danger}
              type="button"
              onClick={rejectModal}
            >
              {buttonRejectText || "No"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});

export default Modal;
