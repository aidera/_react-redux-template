import cn from "classnames";
import { Field, useField } from "formik";
import React, { useRef } from "react";
import s from "./FormControls.module.scss";
import { errorContainer, fieldIcon, maxLengthCounter } from "./Common";

type PropsType = {
  name: string;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  type?: string;
  icon?: "email" | "password" | "user" | "search";
  autoFocus?: boolean;
};

const FieldInput: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { name, label, maxLength, placeholder, type, icon, autoFocus } = props;

  const [field, { error, touched }] = useField(name);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <fieldset
      className={cn(s.field, s.fieldInput, { [s.active]: field.value })}
      onClick={() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      {!!label && <label htmlFor={`${name}`}>{label}</label>}

      <div className={s.container}>
        <Field
          name={name}
          as="input"
          id={name}
          placeholder={placeholder}
          maxLength={maxLength}
          type={type}
          autoFocus={autoFocus}
          className={cn({
            [s.error]: error && touched,
            [s.withIcon]: icon,
          })}
        />
        {icon && <div className={s.fieldIcon}>{fieldIcon(icon)}</div>}
        {field.value && maxLengthCounter(field.value.length, maxLength)}
      </div>

      {errorContainer(error, touched)}
    </fieldset>
  );
});

export default FieldInput;
