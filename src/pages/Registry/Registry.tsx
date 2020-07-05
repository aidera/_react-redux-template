import React from "react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import s from "../../layouts/SignLayout/SignLayout.module.sass";
import CustomField from "../../components/FormsControls/CustomFormControls";

type FormValues = {
  "registry-email": string;
  "registry-password": string;
};

const Registry: React.FC = React.memo(() => {
  return (
    <Formik
      initialValues={{
        "registry-email": "",
        "registry-password": "",
      }}
      validationSchema={Yup.object({
        "registry-email": Yup.string()
          .email("Invalid email address")
          .required("Required"),
        "registry-password": Yup.string().required("Required"),
      })}
      onSubmit={(values, actions) => {
        console.log("submit");
      }}
    >
      {(props: FormikProps<FormValues>) => (
        <Form className={s.form} onSubmit={props.handleSubmit}>
          <h1>Registry</h1>

          <CustomField
            name="registry-email"
            fieldType="input"
            type="email"
            placeholder="Enter your email"
            label="Email"
            autoFocus
            maxLength={30}
            icon="email"
          />
          <CustomField
            name="registry-password"
            fieldType="input"
            type="password"
            placeholder="Enter your password"
            label="Password"
            icon="password"
          />
          <button className="button-type-1" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
});

export default Registry;
