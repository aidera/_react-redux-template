import cn from "classnames";
import { Field, useField } from "formik";
import React from "react";
import s from "./FormControls.module.scss";
import { errorContainer } from "./Common";

type PropsType = {
  name: string;
  label: string;
};

const FieldCheckbox: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { name, label } = props;

  const [field, { error, touched }] = useField(name);

  return (
    <fieldset className={cn(s.field, s.fieldCheckbox)}>
      <div className={s.container}>
        <Field name={name} id={name} type="checkbox" checked={field.value} />
        <label htmlFor={name}>{label}</label>
      </div>
      {errorContainer(error, touched)}
    </fieldset>
  );
});

export default FieldCheckbox;
