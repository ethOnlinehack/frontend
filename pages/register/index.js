import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./form.module.scss";
import ButtonComponent from "../../components/Button";
import InputText from "../../components/Form/InputText";
import SimpleCard from "../../components/SimpleCard";
import { register } from "../../services/userService";
import Router  from "next/router";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const validate = Yup.object({
    first_name: Yup.string().required("Firstname Required!"),
    last_name: Yup.string(),
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
    password: Yup.string()
      .min(4, "Password must be minimum 4 digits!")
      .required("Password Required!"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match!")
      .required("Confirm password is required!"),
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SimpleCard>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => {
            setLoading(true);
            register(values)
              .then((data) => {
                console.log(data);
                Router.push("/login")
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          {(formik) => (
            <div className={css.font}>
              <Form className="form p-3">
                <label style={{ marginTop: "100px" }}>
                  First Name
                  <InputText
                    type="text"
                    name="first_name"
                    placeholder="First name"
                  />
                </label>
                <label>
                  Last Name
                  <InputText
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                  />
                </label>
                <label>
                  Email
                  <InputText type="email" name="email" placeholder="Email" />
                </label>
                <label>
                  Password
                  <InputText
                    type="password"
                    name="password"
                    placeholder="*********"
                  />
                </label>
                <div>
                  <label>
                    Confirm Password
                    <InputText
                      type="password"
                      name="confirm_password"
                      placeholder="*********"
                    />
                  </label>
                  <ButtonComponent
                    style={{ width: "100%" }}
                    htmlType="submit"
                    loading={loading}
                  >
                    Sign up
                  </ButtonComponent>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </SimpleCard>
    </div>
  );
}

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};
