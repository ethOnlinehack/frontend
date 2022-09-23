import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import ButtonComponent from "../Button";
import css from "./navbar.module.scss";
const { Header, Content, Footer } = Layout;
import { useAuth } from "../../contexts/Auth";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Layout className={css.navbar}>
      <Header
        style={{
          position: "flex",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Menu
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          mode="horizontal"
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Team</Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item
            key="4"
            style={{ position: "absolute", left: "50px", float: "left" }}
          >
            Lorem
          </Menu.Item>
          <Menu.Item
            key="button"
            style={{
              position: "absolute",
              right: "50px",
              float: "right",
              marginTop: "16px",
            }}
          >
            {isAuthenticated ? (
              user.first_name
            ) : (
              <ButtonComponent>Sign in</ButtonComponent>
            )}
          </Menu.Item>
        </Menu>
      </Header>
      {/*     <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        Content
      </div>
    </Content> */}
    </Layout>
  );
};

export default Navbar;
