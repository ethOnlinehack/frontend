import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Link from "next/link";
import ButtonComponent from '../Button';
import css from './navbar.module.scss';
import { Col, Row } from "antd";
import { useAuth } from "../../contexts/Auth/index";
import { HomeOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  return(
  <Row gutter={24}>
  <Layout className={css.navbar}>
    <Header 
      style={{
        position: 'flex',
        zIndex: 1,
        width: '100%',
      }}
    >
      <Menu style={{color:"white", display: "flex",
    alignItems: "center",
    justifyContent: "center"}}
        mode="horizontal"
        
      >
        <Col span={3} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <Menu.Item className="hover" key="4" style={{color:"white"}} ><Link href="/" style={{color:"white"}}><HomeOutlined style={{height:"30px"}}/></Link></Menu.Item>
        </Col>
        <Col span={18} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }} >
        <Menu.Item className="hover" key="1" style={{display:"inline", color:"white"}}>Home</Menu.Item>
        <Menu.Item className="hover" key="2" style={{display:"inline", color:"white"}}>Team</Menu.Item>
        <Menu.Item className="hover" key="3" style={{display:"inline", color:"white"}}>Services</Menu.Item>
        </Col>
        <Col span={3}           style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {isAuthenticated
        ? <Menu.Item key="user" > <p>{user.email}</p> </Menu.Item>
        : <Menu.Item key="button"  > <Link href="/login"><ButtonComponent>Sign in</ButtonComponent></Link> </Menu.Item>
      }
   
        {/* <p style={{marginBottom:"0"}}>hi</p> */}
        </Col>
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
  </Row>
);
  }

export default Navbar;