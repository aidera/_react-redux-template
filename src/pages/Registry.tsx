import React from "react";
import * as Yup from "yup";
import { BsPerson } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { Formik, FormikProps } from "formik";
import s from "../layouts/AuthLayout/AuthLayout.module.scss";
import FieldInput from "../components/FormsControls/FieldTextInput";
import Button from "../components/Button/Button";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

interface IRegistryForm {
  registryName: string;
  registryEmail: string;
  registryPassword: string;
}

const Registry: React.FC = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>Registry page</title>
      </Helmet>
      <AuthLayout>
        <Formik
          enableReinitialize
          initialValues={{
            registryName: "",
            registryEmail: "",
            registryPassword: "",
          }}
          validationSchema={Yup.object().shape({
            registryName: Yup.string().required("Full name is required"),
            registryEmail: Yup.string()
              .required("Email is required")
              .email("Email is not correct"),
            registryPassword: Yup.string().required("Password is required"),
          })}
          onSubmit={(values, actions) => {
            console.log("Submit");
          }}
        >
          {(props: FormikProps<IRegistryForm>) => (
            <form className={s.form}>
              <h1>Registry</h1>
              <FieldInput
                name="registryName"
                type="text"
                label="Full Name"
                autoFocus
                maxLength={30}
                icon="user"
              />
              <FieldInput
                name="registryEmail"
                type="email"
                label="Email"
                icon="email"
              />
              <FieldInput
                name="registryPassword"
                type="password"
                label="Password"
                icon="password"
              />
              <Button type="submit" variant="fill">
                <BsPerson /> Submit
              </Button>
            </form>
          )}
        </Formik>
      </AuthLayout>
    </>
  );
});

export default Registry;
