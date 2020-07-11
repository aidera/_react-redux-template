import React, { RefObject } from "react";
import cn from "classnames";
import s from "./Modal.module.scss";
import Preloader from "../Preloader/Preloader";
import Overlay from "../Overlay/Overlay";
import show from "../../assets/utils/animations/show";
import hide from "../../assets/utils/animations/hide";

/* Modal windows that can be without buttons, with 1 resolve/reject button or 2 buttons */
/* Made with class component because of show-animation in beginning and loading state inside
(when state in func have changed component rerenders and begin show-animation again) */

type PropsType = {
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
};

type StateType = {
  text: string | null;
  buttonResolveText: string;
  buttonRejectText: string | null;
  promiseResolveError?: string;
  promiseRejectError?: string;
  promiseCancelError?: string;
  isPromiseResolveError: boolean;
  isPromiseRejectError: boolean;
  isPromiseCancelError: boolean;
  modal: RefObject<HTMLDivElement>;
  isLoading: boolean;
  isClosing: boolean;
};

class Modal extends React.PureComponent<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      text: props.text || "Are you sure?",
      buttonResolveText: props.buttonResolveText || "Ok",
      buttonRejectText: props.buttonRejectText || "",

      promiseResolveError:
        props.promiseResolveError || "Ooops.. there is an error",
      promiseRejectError:
        props.promiseRejectError || "Ooops.. there is an error",
      promiseCancelError:
        props.promiseCancelError || "Ooops.. there is an error",

      isPromiseResolveError: false,
      isPromiseRejectError: false,
      isPromiseCancelError: false,

      isClosing: false,
      isLoading: false,

      modal: React.createRef<HTMLDivElement>(),
    };
  }

  componentDidUpdate(prevProps: PropsType): void {
    const { isOpen } = this.props;
    const { isClosing, modal } = this.state;

    if (prevProps.isOpen !== isOpen) {
      if (isOpen && !isClosing) {
        show(modal.current);
      }
    }
  }

  cancelModal = (): void => {
    const { promiseCancel, callbackCancel } = this.props;

    if (promiseCancel) {
      this.setState(
        {
          isLoading: true,
          isPromiseResolveError: false,
          isPromiseRejectError: false,
          isPromiseCancelError: false,
        },
        () => {
          if (callbackCancel) {
            callbackCancel();
          }
          if (promiseCancel) {
            promiseCancel()
              .then(() => {
                this.closeModal();
              })
              .catch(() => {
                this.setState({
                  isPromiseCancelError: true,
                  isLoading: false,
                });
              });
          }
        }
      );
    } else {
      if (callbackCancel) {
        callbackCancel();
      }
      this.closeModal();
    }
  };

  resolveModal = (): void => {
    const { promiseResolve, callbackResolve } = this.props;

    if (promiseResolve) {
      this.setState(
        {
          isLoading: true,
          isPromiseResolveError: false,
          isPromiseRejectError: false,
          isPromiseCancelError: false,
        },
        () => {
          if (callbackResolve) {
            callbackResolve();
          }
          if (promiseResolve) {
            promiseResolve()
              .then(() => {
                this.closeModal();
              })
              .catch(() => {
                this.setState({
                  isPromiseResolveError: true,
                  isLoading: false,
                });
              });
          }
        }
      );
    } else {
      if (callbackResolve) {
        callbackResolve();
      }
      this.closeModal();
    }
  };

  rejectModal = (): void => {
    const { promiseReject, callbackReject } = this.props;

    if (promiseReject) {
      this.setState(
        {
          isLoading: true,
          isPromiseResolveError: false,
          isPromiseRejectError: false,
          isPromiseCancelError: false,
        },
        () => {
          if (callbackReject) {
            callbackReject();
          }
          if (promiseReject) {
            promiseReject()
              .then(() => {
                this.closeModal();
              })
              .catch(() => {
                this.setState({
                  isPromiseRejectError: true,
                  isLoading: false,
                });
              });
          }
        }
      );
    } else {
      if (callbackReject) {
        callbackReject();
      }
      this.closeModal();
    }
  };

  closeModal = (): void => {
    const { modal } = this.state;
    const { setIsOpen } = this.props;

    if (modal !== null) {
      this.setState(
        {
          isClosing: true,
        },
        () => {
          hide(modal.current, () => {
            this.setState({
              isClosing: false,
              isLoading: false,
              isPromiseResolveError: false,
              isPromiseRejectError: false,
              isPromiseCancelError: false,
            });
            setIsOpen(false);
          });
        }
      );
    }
  };

  render(): JSX.Element | null {
    const { isOpen } = this.props;
    const {
      modal,
      text,
      isPromiseResolveError,
      promiseResolveError,
      isPromiseRejectError,
      promiseRejectError,
      isPromiseCancelError,
      promiseCancelError,
      isLoading,
      buttonResolveText,
      buttonRejectText,
    } = this.state;

    if (!isOpen) return null;

    return (
      <div ref={modal} className={s.modal}>
        <Overlay onClick={this.cancelModal} />
        <div className={s.modal__card}>
          <span>{text}</span>

          {isPromiseResolveError && promiseResolveError && (
            <div className={s.error}>{promiseResolveError}</div>
          )}

          {isPromiseRejectError && promiseRejectError && (
            <div className={s.error}>{promiseRejectError}</div>
          )}

          {isPromiseCancelError && promiseCancelError && (
            <div className={s.error}>{promiseCancelError}</div>
          )}

          <div className={s.buttons}>
            {isLoading && <Preloader />}

            {!!buttonResolveText && !isLoading && (
              <button
                type="button"
                onClick={this.resolveModal}
                className={cn("button-type-1")}
              >
                {buttonResolveText}
              </button>
            )}

            {!!buttonRejectText && !isLoading && (
              <button
                type="button"
                onClick={this.rejectModal}
                className={cn("button-type-2")}
              >
                {buttonRejectText}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
