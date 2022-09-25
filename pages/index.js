import { Image } from "antd";
import { useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import Link from "next/link";
import ButtonComponent from "../components/Button";
import { API } from "../services/routes";
import CardImage from "../components/CardImage";
import SimpleCard from "../components/SimpleCard";
import { Card, Col, Row } from "antd";
import {
  BulbOutlined,
  PlayCircleOutlined,
  BulbFilled,
  ThunderboltFilled,
  DeploymentUnitOutlined,
  DollarCircleFilled,
} from "@ant-design/icons";
import css from "./homepage.module.scss";
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const title = (children) => <div>{children}</div>;

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            position: "absolute",
            zIndex: "2",
            color: "white",
            marginTop: "400px",
            display: "inline-block",
            fontSize: "50px",
          }}
        >
          Web3 Games Made Easy
        </h1>
        <Link href="/register">
        <ButtonComponent
          style={{
            zIndex: "2",
            position: "absolute",
            marginTop: "600px",
            fontSize: "24px",
            padding: "23px",
            background: "transparent",
            borderColor: "white",
          }}
        >
          Get Started{" "}
          <PlayCircleOutlined
            style={{ marginLeft: "20px", color: "#68d788" }}
          />
        </ButtonComponent>
        </Link>
      </div>
      <Image
        src="/testCover.jpg"
        style={{ opacity: "0.3", zIndex: "1", objectFit: "cover" }}
        alt="example"
        width="100%"
        height="500px"
        preview={false}
      />
      <div
        className="site-card-wrapper"
        style={{ marginTop: "30px", marginLeft: "70px", marginRight: "70px" }}
      >
        <Row gutter={24}>
          <Col
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              className={css.home}
              title={title(
                <p
                  style={{
                    color: "#BFCCB8",
                    margin: "0",
                    padding: "0",
                    fontSize: "18px",
                    color: "#68d788",
                  }}
                >
                  <ThunderboltFilled
                    style={{ fontSize: "28px", color: "#BFCCB8" }}
                  />{" "}
                  Blazing Fast
                </p>
              )}
              style={{
                background: "#232B39",
                borderColor: "#2C424F",
                width: "100%",
                maxWidth: "470px",
                borderRadius: "8px",
              }}
              bordered={true}
            >
              <p
                style={{
                  color: "#BFCCB8",
                  margin: "0",
                  padding: "0",
                  fontSize: "18px",
                }}
              >
                We deliver a secure, lightning-fast experience through our APIs.
              </p>
            </Card>
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              className={css.home}
              title={title(
                <p
                  style={{
                    color: "#BFCCB8",
                    margin: "0",
                    padding: "0",
                    fontSize: "18px",
                    color: "#68d788",
                  }}
                >
                  <DeploymentUnitOutlined
                    style={{ fontSize: "28px", color: "#BFCCB8" }}
                  />{" "}
                  Cross-Platform
                </p>
              )}
              style={{
                background: "#232B39",
                borderColor: "#2C424F",
                width: "100%",
                maxWidth: "470px",
                borderRadius: "8px",
              }}
              bordered={true}
            >
              <p
                style={{
                  color: "#BFCCB8",
                  margin: "0",
                  padding: "0",
                  fontSize: "18px",
                }}
              >
                Our product is a cross-platform solution, easy to implement on
                Desktops, Mobiles and Consoles.
              </p>
            </Card>
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              className={css.home}
              title={title(
                <p
                  style={{
                    color: "#BFCCB8",
                    margin: "0",
                    padding: "0",
                    fontSize: "18px",
                    color: "#68d788",
                  }}
                >
                  <DollarCircleFilled
                    style={{ fontSize: "28px", color: "#BFCCB8" }}
                  />{" "}
                  Gasless
                </p>
              )}
              style={{
                background: "#232B39",
                borderColor: "#2C424F",
                width: "100%",
                maxWidth: "470px",
                borderRadius: "8px",
              }}
              bordered={true}
            >
              <p
                style={{
                  color: "#BFCCB8",
                  margin: "0",
                  padding: "0",
                  fontSize: "18px",
                }}
              >
                Provide a Gasless Game Experience for your players through our
                platform.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{textAlign:"center", marginTop:"70px"}}>
        <h1 style={{fontSize:"60px"}}>Team</h1>
      </div>
      <div style={{marginTop:"70px"}} >
        <Row gutter={24} >
          <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100,
    }}
    src="/Zied Chekir.png"
  />
  </Col>
  <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100,
    }}
    src="/Alaa Souabni.png"
  />
  </Col>
  <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100,
    }}
    src="/Nour Mbarek.png"
  />
  </Col>
  <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 100,
      lg: 64,
      xl: 80,
      xxl: 100,
    }}

    src="/Sami Kammoun.png"
  />
  </Col>
  </Row>
  </div>
  <div>
  <Row gutter={24}>
    <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <h1 style={{marginTop:"20px", fontSize:"18px"}}>Zied Chekir</h1>
    </Col>
    <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <h1 style={{marginTop:"20px", fontSize:"18px"}}>Alaa Souabni</h1>
    </Col>
    <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <h1 style={{marginTop:"20px", fontSize:"18px"}}>Nour Mbarek</h1>
    </Col>
    <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <h1 style={{marginTop:"20px", fontSize:"18px"}}>Sami Kammoun</h1>
    </Col>
  </Row>


  <Row gutter={24}>
    <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <h1 style={{ fontSize:"18px", padding:"0", margin:"0"}}>Backend Engineer</h1>
    </Col>
    <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <h1 style={{fontSize:"18px", padding:"0", margin:"0"}}>Frontend Engineer</h1>
    </Col>
    <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <h1 style={{fontSize:"18px", padding:"0", margin:"0"}}>Frontend Engineer</h1>
    </Col>
    <Col span={6} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <h1 style={{fontSize:"18px", padding:"0", margin:"0"}}>Blockchain Engineer</h1>
    </Col>
  </Row>
  </div>
    </div>
  );
}
