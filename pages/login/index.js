import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./login.module.scss";
import ButtonComponent from "../../components/Button";
import InputText from "../../components/Form/InputText";
import SimpleCard from "../../components/SimpleCard";

export default function SignupForm() {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
    password: Yup.string()
      .min(4, "Password must be minimum 4 digits!")
      .required("Password Required!"),
  });

  return (
    <div style={{display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>
    <SimpleCard title="Sign in to the app" >
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
                <ButtonComponent style={{ width: "100%" }} htmlType="submit">
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
  email: "",
  password: "",
};
