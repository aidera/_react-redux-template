import React from "react";
import s from "./Overlay.module.scss";

type PropsType = {
  onClick?: () => void;
};

const Overlay: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { onClick } = props;
  return <div role="dialog" onClick={onClick} className={s.overlay} />;
});

export default Overlay;
