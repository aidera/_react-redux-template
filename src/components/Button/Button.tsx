import React from "react";
import cn from "classnames";
import s from "./Button.module.scss";

type PropsType = {
  type?: "button" | "submit" | "reset" | undefined;
  buttonStyle?: "fill" | "outline" | undefined;
  children: React.ReactNode;
};

const Button: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { type, buttonStyle, children } = props;

  return (
    <button
      className={cn(s.button, {
        [s.filled]: buttonStyle === "fill",
        [s.outline]: buttonStyle === "outline",
      })}
      type={type}
    >
      {children}
    </button>
  );
});

export default Button;
