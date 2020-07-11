import cn from "classnames";
import { useField } from "formik";
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

const FieldTextarea: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { name, label, maxLength, placeholder, icon, autoFocus } = props;

  const [field, { error, touched }] = useField(name);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <fieldset
      onClick={() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }}
      className={cn(s.field, s.fieldTextarea, { [s.active]: field.value })}
    >
      {!!label && <label htmlFor={name}>{label}</label>}

      <div className={s.container}>
        <textarea
          name={name}
          id={name}
          rows={1}
          ref={textareaRef}
          placeholder={placeholder}
          maxLength={maxLength}
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

export default FieldTextarea;
