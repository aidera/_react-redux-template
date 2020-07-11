import React from "react";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { BsPerson } from "react-icons/bs";
import s from "../../layouts/SignLayout/SignLayout.module.scss";
import FieldInput from "../../components/FormsControls/FieldInput";
import Button from "../../components/Button/Button";

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

          <FieldInput
            name="registry-email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            autoFocus
            maxLength={30}
            icon="email"
          />
          <FieldInput
            name="registry-password"
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

export default Registry;
