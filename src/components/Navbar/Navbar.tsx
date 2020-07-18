import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { BsX } from "react-icons/all";
import { CSSTransition } from "react-transition-group";
import s from "./Navbar.module.scss";
import overlayStyles from "../Overlay/Overlay.module.scss";
import Overlay from "../Overlay/Overlay";
import themeVariables from "../../assets/theme/variables";

interface IProps {
  isOpen: boolean;
  setIsOpen: (status: boolean) => void;
}

const Navbar: React.FC<IProps> = React.memo((props: IProps) => {
  const { isOpen, setIsOpen } = props;

  return (
    <div className={cn(s.navbar, { [s.active]: isOpen })}>
      <CSSTransition
        in={isOpen}
        timeout={themeVariables.transition.transition_1}
        classNames={{
          enter: overlayStyles.overlayTransitionEnter,
          enterActive: overlayStyles.overlayTransitionEnterActive,
          exit: overlayStyles.overlayTransitionExit,
          exitActive: overlayStyles.overlayTransitionExitActive,
        }}
        unmountOnExit
        appear={isOpen}
      >
        <Overlay onClick={() => setIsOpen(false)} />
      </CSSTransition>
      <CSSTransition
        in={isOpen}
        timeout={themeVariables.transition.transition_1}
        classNames={{
          enter: s.navbarPanelTransitionEnter,
          enterActive: s.navbarPanelTransitionEnterActive,
          exit: s.navbarPanelTransitionExit,
          exitActive: s.navbarPanelTransitionExitActive,
        }}
        unmountOnExit
        appear={isOpen}
      >
        <aside className={s.navbarPanel}>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className={s.closeButton}
          >
            <BsX />
          </button>
          <nav>
            <NavLink to="/">Index</NavLink>
            <NavLink to="/post/1">Post 1</NavLink>
            <NavLink to="/post/2">Post 2</NavLink>
            <NavLink to="/post/3">Post 3</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registry">Registry</NavLink>
          </nav>
        </aside>
      </CSSTransition>
    </div>
  );
});

export default Navbar;
