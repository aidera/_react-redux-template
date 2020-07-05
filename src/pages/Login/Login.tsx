import React from "react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import s from "../../layouts/SignLayout/SignLayout.module.sass";
import CustomField from "../../components/FormsControls/CustomFormControls";

type FormValues = {
  "login-email": string;
  "login-password": string;
};

const Login: React.FC = React.memo(() => {
  return (
    <Formik
      initialValues={{
        "login-email": "",
        "login-password": "",
      }}
      validationSchema={Yup.object({
        "login-email": Yup.string()
          .email("Invalid email address")
          .required("Required"),
        "login-password": Yup.string().required("Required"),
      })}
      onSubmit={(values, actions) => {
        console.log("submit");
      }}
    >
      {(props: FormikProps<FormValues>) => (
        <Form className={s.form} onSubmit={props.handleSubmit}>
          <h1>Login</h1>

          <CustomField
            name="login-email"
            fieldType="input"
            type="email"
            placeholder="Enter your email"
            label="Email"
            autoFocus
            maxLength={30}
            icon="email"
          />
          <CustomField
            name="login-password"
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

export default Login;
