import { Row, Col, Card, Divider, Typography } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAuth } from "../../contexts/Auth";
import Router  from "next/router";

const { Title } = Typography;

const Dashboard = () => {

    const { user, isAuthenticated } = useAuth();
    useEffect(() => {
      if (!isAuthenticated && isAuthenticated != null) Router.push("/login");
    }, []);
  return (
    <Row >
      <Col sm={24} md={12} style={{            display:"flex",
            alignItems:"center",
            justifyContent:"center"}}>
        <Link href="/dashboard/game">
          <Card hoverable
            style={{
              width: "95%",
              minHeight: "300px",
              background: "#324D7D",
              border: "0.5px solid #2c613b",
              color: "white",
              borderRadius: "10px",
              marginTop: "100px",
              textAlign: "center",
            }}
          >
            <div style={{ color: "white" }}>
              <Title level={1} style={{ color: "white", textAlign:"center" }}>
                My games
              </Title>
            </div>
          </Card>
        </Link>
      </Col>
      <Col sm={24} md={12} style={{            display:"flex",
            alignItems:"center",
            justifyContent:"center"}}>
        <Card
          style={{
            width: "95%",
            minHeight: "300px",

            background: "#232B39",
            border: "0.5px solid #2c613b",
            color: "white",
            borderRadius: "10px",
            marginTop: "100px",
            textAlign: "center",

          }}
        >
          <div style={{ color: "white" }}>
            <Title level={1} style={{ color: "white" }}>
              Cryptocurrency
            </Title>
            <p>Not available right now.</p>
          </div>
        </Card>
      </Col>
      <Col sm={24} md={12}></Col>
      <Col sm={24} md={12}></Col>
    </Row>
  );
};

export default Dashboard;
