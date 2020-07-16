import React from "react";
import cn from "classnames";
import s from "./Button.module.scss";

type PropsType = {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "fill" | "outline" | undefined;
  children: React.ReactNode;
};

const Button: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { type, variant, children } = props;

  return (
    <button
      className={cn(s.button, {
        [s.filled]: variant === "fill",
        [s.outline]: variant === "outline",
      })}
      type={type}
    >
      {children}
    </button>
  );
});

export default Button;
