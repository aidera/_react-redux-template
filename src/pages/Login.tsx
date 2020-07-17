import React from "react";
import * as Yup from "yup";
import { BsPerson } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { Formik, Form, FormikProps } from "formik";
import s from "../layouts/AuthLayout/AuthLayout.module.scss";
import FieldInput from "../components/FormsControls/FieldInput";
import Button from "../components/Button/Button";
import { IconEnum } from "../types/Form";
import FieldCheckbox from "../components/FormsControls/FieldCheckbox";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

interface ILoginForm {
  loginEmail: string;
  loginPassword: string;
  loginRememberMe: boolean;
}

const Login: React.FC = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <AuthLayout>
        <Formik
          enableReinitialize
          initialValues={{
            loginEmail: "",
            loginPassword: "",
            loginRememberMe: true,
          }}
          validationSchema={Yup.object().shape({
            loginEmail: Yup.string()
              .required("Email is required")
              .email("Email is not correct"),
            loginPassword: Yup.string().required("Password is required"),
            loginRememberMe: Yup.boolean().oneOf(
              [true],
              "Must Accept Terms and Conditions"
            ),
          })}
          onSubmit={(values, actions) => {
            console.log("Submit");
          }}
        >
          {(props: FormikProps<ILoginForm>) => (
            <Form className={s.form}>
              <h1>Login</h1>
              <FieldInput
                name="loginEmail"
                type="email"
                label="Email"
                autoFocus
                icon={IconEnum.email}
              />
              <FieldInput
                name="loginPassword"
                type="password"
                label="Password"
                icon={IconEnum.password}
              />
              <FieldCheckbox name="loginRememberMe" label="Remember me" />
              <Button type="submit" variant="fill">
                <BsPerson /> Submit
              </Button>
            </Form>
          )}
        </Formik>
      </AuthLayout>
    </>
  );
});

export default Login;
