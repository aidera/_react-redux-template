import React, { useEffect, useRef } from "react";
import { Field, useField } from "formik";
import cn from "classnames";
import autosize from "autosize";
import { BsLock, BsEnvelope, BsPerson } from "react-icons/bs";
import s from "./CustomFormControls.module.sass";

type PropsType = {
  name: string;
  fieldType: string;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  type?: string;
  icon?: "email" | "password" | "user";
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  autoFocus?: boolean;
};

const CustomField: React.FC<PropsType> = React.memo((props: PropsType) => {
  const {
    name,
    label,
    fieldType,
    maxLength,
    placeholder,
    type,
    icon,
    onKeyDown,
    autoFocus,
  } = props;

  const [field, { error, touched }] = useField(name);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Textarea autoresize
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      autosize(textareaRef.current);
    }
  });

  const iconSwitcher = () => {
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

  const errorContainer = (error: string | undefined, touched: boolean) => {
    if (error && touched) {
      return <div className={s.messageError}>{error}</div>;
    }
    return null;
  };

  const maxLengthCounter = (
    currentLength: number,
    maxLength: number | undefined
  ) => {
    if (maxLength) {
      return (
        <div
          className={cn(s.maxLength, { [s.error]: currentLength >= maxLength })}
        >
          {currentLength}/{maxLength}
        </div>
      );
    }
    return null;
  };

  const inputGroup = () => {
    return (
      <fieldset className={s.inputGroup}>
        {!!label && <label htmlFor={`form-${name}`}>{label}</label>}

        <div className={s.inputContainer}>
          <Field
            as="input"
            id={`form-${name}`}
            placeholder={placeholder}
            maxLength={maxLength}
            type={type}
            autoFocus={autoFocus}
            className={cn({
              [s.inputError]: error && touched,
              [s.withIcon]: icon,
            })}
          />
          {icon && <div className={s.fieldIcon}>{iconSwitcher()}</div>}
          {maxLengthCounter(field.value.length, maxLength)}
        </div>

        {errorContainer(error, touched)}
      </fieldset>
    );
  };

  const textareaGroup = () => {
    return (
      <fieldset className={s.textareaGroup}>
        {!!label && <label htmlFor={`form-${name}`}>{label}</label>}

        <div className={s.textareaContainer}>
          <textarea
            id={`form-${name}`}
            rows={1}
            ref={textareaRef}
            placeholder={placeholder}
            maxLength={maxLength}
            onKeyDown={onKeyDown}
            autoFocus={autoFocus}
            className={cn({ [s.inputError]: error && touched })}
          />
          {maxLengthCounter(field.value.length, maxLength)}
        </div>

        {errorContainer(error, touched)}
      </fieldset>
    );
  };

  const checkboxGroup = () => {
    return (
      <fieldset className={s.checkboxGroup}>
        <div className={s.checkboxAndLabel}>
          <Field
            id={`form-${name}`}
            type="checkbox"
            checked={field.value}
            placeholder={placeholder}
          />
          <label htmlFor={`form-${name}`}>{label}</label>
        </div>

        {errorContainer(error, touched)}
      </fieldset>
    );
  };

  // Render desired field by fieldType
  const fieldTypeSwitcher = () => {
    switch (fieldType) {
      case "input":
        return inputGroup();

      case "textarea":
        return textareaGroup();

      case "checkbox":
        return checkboxGroup();

      default:
        return inputGroup();
    }
  };

  return <div className={s.field}>{fieldTypeSwitcher()}</div>;
});

export default CustomField;
