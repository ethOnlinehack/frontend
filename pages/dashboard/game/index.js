import React from "react";
import { useState } from "react";
import CardImage from "../../../components/CardImage/index";
import { Col, Row, Image } from "antd";
import ButtonComponent from "../../../components/Button";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";

const Games = () => {
  const [games, setGames] = useState();

  
  return (
    <div >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ position: "absolute", zIndex: "2" }}>My Games</h1>
      </div>
      <div>
        <Image
          src="/testCover.jpg"
          style={{ opacity: "0.3", zIndex: "1", objectFit: "cover" }}
          alt="example"
          width="100%"
          height="300px"
          preview={false}
        />
      </div>
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
              justifyContent: "space-evenly",
            }}

          >
            <PlusOutlined />
            Add Game
          </ButtonComponent>
        </Link>
      </div>
      {/* <Row gutter={24}>
        {games.map((game) => (
          <div key={game.id}>
            <Col
              span={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardImage image={game.image} title={game.title}></CardImage>
            </Col>
          </div>
        ))}
      </Row> */}
    </div>
  );
};

export default Games;
