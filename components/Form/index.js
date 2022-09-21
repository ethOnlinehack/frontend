import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "../Form/InputText/index";
import * as Yup from "yup";
import css from "./form.module.scss"


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
      .required("Confirm password is required!"),
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
          <div className={css.font}>
            <Form className="form p-3">
                <label style={{marginTop: "100px"}}>
                    First Name
              <TextField
                type="text"
                name="firstName"
                placeholder="Lorem"
              />
              </label>
              <label>
                Last Name
              <TextField
                type="text"
                name="lastName"
                placeholder="Ipsum"
              />
              </label>
              <label>
                Email
              <TextField
                type="email"
                name="email"
                placeholder="loremipsum@gmail.com"
              />
              </label>
              <label>
                Password
              <TextField
                type="password"
                name="password"
                placeholder="qwert@123"
              />
              </label>
              <div>
                <label>
                    Confirm Password
              <TextField
                type="password"
                name="confirmPassword"
                placeholder="qwert@123"
              />
              </label>

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