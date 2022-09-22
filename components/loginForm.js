// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../services/userService";
import { httpClient, METHOD } from "../services/httpService";
import { API } from "../services/routes";
import { useAuth } from "../contexts/Auth";

const LoginForm = () => {
  const { user, setUser, setIsAuthenticated } = useAuth();

  return (
    <div>
      {user && user.email}
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          login(values)
            .then((data) => {
              setUser(data);
              setIsAuthenticated(true)
              setSubmitting(false);

            })
            .catch((e) => {
              console.log(e)
              console.log("error while login");
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
