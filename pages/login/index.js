import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./login.module.scss";
import ButtonComponent from "../../components/Button";
import InputText from "../../components/Form/InputText";
import SimpleCard from "../../components/SimpleCard";
import { login } from "../../services/userService";
import Router from "next/router";
import { useAuth } from "../../contexts/Auth";
import Link from "next/link";
import { Col, Divider, Row } from 'antd';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, setUser, setIsAuthenticated } = useAuth();
  useEffect(() => {
    if (isAuthenticated) Router.push("/dashboard");
  }, [isAuthenticated]);
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
    password: Yup.string()
      .min(4, "Password must be minimum 4 digits!")
      .required("Password Required!"),
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <Row gutter={24}>
        <Col span={24}       style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <SimpleCard title="Sign in to the app">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => {
            setLoading(true);
            login(values)
              .then((data) => {
                setUser(data);
                setIsAuthenticated(true);
                Router.push("/dashboard");
              })
              .catch((e) => {
                console.log(e);
                console.log("error while login");
              })
              .then(() => {
                setLoading(false);
              });
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
                    Sign in
                  </ButtonComponent>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </SimpleCard>
      </Col>
      <Col span={24}       style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div>
      <SimpleCard style={{background:"#111927"}}>
        <div>
        <p style={{fontStyle:"bold",textAlign:'center', fontSize:"15px", marginBottom:"0"}}>New to the app? <Link href="/register"> Create an account.</Link></p>
        
        </div>
      </SimpleCard>
      </div>
      </Col>
      </Row>
    </div>
  );
}

const initialValues = {
  email: "",
  password: "",
};
