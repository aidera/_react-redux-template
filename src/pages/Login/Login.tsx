import React from "react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { BsPerson } from "react-icons/bs";
import s from "../../layouts/AuthLayout/AuthLayout.module.scss";
import FieldInput from "../../components/FormsControls/FieldInput";
import Button from "../../components/Button/Button";

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

          <FieldInput
            name="login-email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            autoFocus
            maxLength={30}
            icon="email"
          />
          <FieldInput
            name="login-password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            icon="password"
          />
          <Button buttonStyle="fill">
            <BsPerson /> Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
});

export default Login;
