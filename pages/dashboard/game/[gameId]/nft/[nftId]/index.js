import React, { useState } from "react";
import CardImage from "../../../../../../components/CardImage/index";
import { Col, Card, Row, Image, Typography,Divider } from "antd";
import SimpleCard from "../../../../../../components/SimpleCard";
const { Title } = Typography;

const Nft = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Row gutter={24}>
        <Col
          md={8}
          sm={24}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            preview={{ visible: false }}
          
            src="/Cover.png"
            alt="example"
            onClick={() => setVisible(true)}
          />
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
            >
              <Image src="/Cover.png" alt="example" />
            </Image.PreviewGroup>
          </div>
        </Col>
        <Col md={15} sm={24}>
          <Card
            style={{
              width: "100%",
              minHeight: 300,
              background: "#232B39",
              border: "0.5px solid #2c613b",
              color: "white",
              borderRadius: "10px"

            }}
          >
            <div style={{ color: "white" }} >
              <Title level={3} style={{ color: "white" }}> Nft name:</Title> <p>test</p>
              <Divider style={{background:"#2c613b"}}/>
              <Title level={3} style={{ color: "white" }}> Nft Description:</Title>

            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Nft;
