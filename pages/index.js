import { Image } from "antd";
import { useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import Link from "next/link";
import ButtonComponent from "../components/Button";
import { API } from "../services/routes";
import CardImage from "../components/CardImage";
import SimpleCard from "../components/SimpleCard";
import { Col, Row } from "antd";
import { BulbOutlined } from "@ant-design/icons";


export default function Home() {
  const { user, isAuthenticated } = useAuth();

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
            marginTop: "500px",
            display: "inline-block",
            fontSize: "36px",
          }}
        >
          Web3 Games Made Easy
        </h1>
      </div>
      <Image
        src="/testCover.jpg"
        style={{ opacity: "0.3", zIndex: "1", objectFit: "cover" }}
        alt="example"
        width="100%"
        height="500px"
        preview={false}
      />
      <Row gutter={24} >
        <Col sm={24} md={8} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <SimpleCard style={{width:"400px", display:"flex", alignItems:"left", justifyContent:"left", padding:"20px", borderColor:"#474c53"}}>
            <BulbOutlined style={{margin:"10px"}} />
            <p style={{display:"block"}}>Lorem Ipsum</p>
            </SimpleCard>
        </Col>
        <Col sm={24} md={8} style={{display:"flex", alignItems:"center", justifyContent:"center", }}>
          <SimpleCard style={{width:"400px", borderColor:"#474c53"}}></SimpleCard>
        </Col>
        <Col sm={24} md={8} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <SimpleCard style={{width:"400px", borderColor:"#474c53"}}></SimpleCard>
        </Col>
      </Row>
    </div>
  );
}
