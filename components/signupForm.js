import React from "react";
import "../styles/signupForm.module.css";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "./textField";
import * as Yup from "yup";

export default function SignupForm() {
  const validate = Yup.object({
    firstName: Yup.string().required("Firstname Required!"),
    lastName: Yup.string(),
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
    password: Yup.string()
      .min(4, "Password must be minimum 4 digits!")
      .required("Password Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match!")
      .required("Confirm password is reqired!"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <div>
            <h1 className="">Signup</h1>
            <Form className="form p-3">
              <TextField
                type="text"
                label="Firstname"
                name="firstName"
                placeholder="Lorem"
              />
              <TextField
                type="text"
                name="lastName"
                label="Lastname"
                placeholder="Ipsum"
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                placeholder="loremipsum@gmail.com"
              />
              <TextField
                type="text"
                name="password"
                label="Password"
                placeholder="qwert@123"
              />
              <div className="mb-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  className={`form-control shadow-none ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword &&
                    "is-invalid"
                  }`}
                  type="text"
                  name="confirmPassword"
                  placeholder="confirm password..."
                  {...formik.getFieldProps("confirmPassword")}
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="error"
                />
              </div>
              <button className="btn btn-dark m-3" type="submit">
                Register
              </button>
              <button className="btn btn-primary m-3" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};