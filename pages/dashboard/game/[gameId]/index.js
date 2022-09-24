import React from "react";
import { useState } from "react";
import CardImage from "../../../../components/CardImage/index";
import { Col, Row } from "antd";
import Image from "next/image";
import ButtonComponent from "../../../../components/Button";
import Link from "next/link";
import {PlusOutlined} from '@ant-design/icons';

const Game = () => {
  const [nfts, setNfts] = useState();
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ position: "absolute", zIndex: "2", color:"white" }}>NFTs Collection</h1>
      </div>
      <Image
        src="/testCover.jpg"
        style={{ opacity: "0.3", zIndex: "1" }}
        alt="example"
        layout="responsive"
        width="100%"
        height="15px"
      />
      <Row gutter={24}>
        <Col span={4}>
        <h1 style={{marginTop:"60px", marginLeft:"60px", color:"white"}}>Game Name:</h1>
        </Col>
        <Col span={16}></Col>
        <Col span={4}>
      <div
        style={{
          display: "flex",
          alignItems: "right",
          justifyContent: "right",
          marginRight: "60px",
          marginTop: "60px",
        }}
      >
        <Link href="./game/create">
          <ButtonComponent
            style={{
              width: "200px",
              backgroundColor: "#248466",
              borderColor: "#248466",
              borderRadius: "8px",
              height: "49px",
              fontSize: "20px",
              justifyContent:"space-evenly"
            }}
          >
            <PlusOutlined />Add NFT
          </ButtonComponent>
        </Link>
      </div>
      </Col>
      </Row>
      {/* <Row gutter={24}>
        {nfts.map((nft) => (
          <div key={nft.id}>
            <Col
              span={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardImage image={nft.image} title={nft.title}></CardImage>
            </Col>
          </div>
        ))}
      </Row> */}
    </div>
  );
};

export default Game;
