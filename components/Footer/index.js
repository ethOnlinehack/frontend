import React from 'react';
import { Layout, Menu, Col, Row, Button} from "antd";
import css from "./footeer.module.scss";
const { Footer} = Layout;
import Link from 'next/link';
import { HomeOutlined } from "@ant-design/icons";

const Footeer = () => {

    return (
    <Row gutter={24}>
    <Layout className={css.footeer} style={{display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"}} >
        <Footer style={{  position:"sticky", bottom: 0, width:"100%", backgroundColor:"#111927", borderBlockColor:"#232B39", marginTop:"auto", marginBottom:"0" }}>
        <Menu
            style={{
              color: "#5B6D8A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            mode="horizontal"
          >
            <Col
              span={18}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Menu.Item
                className="hover"
                key="1"
                style={{ display: "inline", color: "#5B6D8A" }}
              >
                Home
              </Menu.Item>
              <Menu.Item
                className="hover"
                key="2"
                style={{ display: "inline", color: "#5B6D8A" }}
              >
                Team
              </Menu.Item>
              <Menu.Item
                className="hover"
                key="3"
                style={{ display: "inline", color: "#5B6D8A" }}
              >
                Services
              </Menu.Item>
            </Col>
        </Menu>
        <div style={{textAlign:"center"}}>
        <p style={{color:"#5B6D8A"}}> © 2022 Peepo</p>
        </div>
        </Footer>
    </Layout>
    </Row>
    );
};

export default Footeer; 