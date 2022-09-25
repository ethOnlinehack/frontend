import React from "react";
import { useState } from "react";
import CardImage from "../../../../components/CardImage/index";
import { Col, Row, Image } from "antd";
import ButtonComponent from "../../../../components/Button";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
import { concatURl } from "../../../../services/httpService";
import { useEffect } from "react";
import { useAuth } from "../../../../contexts/Auth";
import Router, { useRouter } from "next/router";
import { getAllNfts } from "../../../../services/nftService";

const Game = () => {
  const [nfts, setNfts] = useState([]);
  const router = useRouter();
  const { gameId } = router.query;
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated && isAuthenticated != null) Router.push("/login");
    if (router.isReady) {
      getAllNfts({ gameId: gameId }).then((data) => {
        setNfts(data);
      });
    }
  }, [gameId, router.isReady, isAuthenticated]);

  return (
    <div>
      {router.isReady ? (
        <div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ position: "absolute", zIndex: "2", color: "white" }}>
              NFTs Collection
            </h1>
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
              <h1
                style={{
                  marginTop: "60px",
                  marginLeft: "60px",
                  color: "white",
                }}
              >
                Game Name:
              </h1>
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
                <Link
                  href={concatURl("/dashboard/game/:gameId/nft/create", {
                    gameId: gameId,
                  })}
                >
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
                    Add NFT
                  </ButtonComponent>
                </Link>
              </div>
            </Col>
          </Row>

          <Row gutter={24}>
            {nfts.map((nft) => (
              <Link key={nft._id} href={concatURl("/dashboard/game/:gameId/nft/:nftId",{gameId,nftId: nft._id})}> 
              <div >
                <Col
                  span={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardImage image={nft.ipfs_card_uri} title={nft.name}></CardImage>
                </Col>
              </div>
              </Link>
            ))}
          </Row>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Game;
