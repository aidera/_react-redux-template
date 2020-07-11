import cn from "classnames";
import React from "react";
import { BsEnvelope, BsLock, BsPerson } from "react-icons/bs";
import s from "./FormControls.module.scss";

export const errorContainer = (error: string | undefined, touched: boolean) => {
  if (error && touched) {
    return <div className={s.messageError}>{error}</div>;
  }
  return null;
};

export const maxLengthCounter = (
  currentLength: number,
  maxLength: number | undefined
) => {
  if (maxLength) {
    return (
      <div
        className={cn(s.maxLength, {
          [s.error]: currentLength >= maxLength,
        })}
      >
        {currentLength}/{maxLength}
      </div>
    );
  }
  return null;
};

export const fieldIcon = (icon: "email" | "password" | "user" | "search") => {
  switch (icon) {
    case "email":
      return <BsEnvelope />;

    case "password":
      return <BsLock />;

    case "user":
      return <BsPerson />;

    default:
      return null;
  }
};
