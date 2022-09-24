import React, { useEffect } from "react";
import { useState } from "react";
import CardImage from "../../../components/CardImage/index";
import { Col, Row, Image } from "antd";
import ButtonComponent from "../../../components/Button";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
import { getAllGames } from "../../../services/gameService";

const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getAllGames().then((data) => {
      setGames(data);
    });
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ position: "absolute", zIndex: "2", color:"white", marginTop:"125px", display:"inline-block", fontSize:"36px" }}>My Games</h1>
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
      <Row gutter={48} style={{                display: "flex",
                justifyContent: "center",}}>
        {games.map((game) => (
          <div key={game._id}>
          <Link href={"/dashboard/game/"+game._id}>
            <Col
              span={24}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"50px"
              }}
            >
              <CardImage image="/Cover.png" title={game.name}></CardImage>
            </Col>
            </Link>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Games;
