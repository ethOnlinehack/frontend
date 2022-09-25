import React from "react";
import ButtonComponent from '../../../../../components/Button';
import { PlusOutlined } from '@ant-design/icons';
import CardImage from "../../../../../components/CardImage/index";
import { Col, Row} from "antd";
import Link from "next/link";
import { concatURl } from "../../../../../services/httpService";
import Router, { useRouter } from "next/router";
import { useAuth } from "../../../../../contexts/Auth";
import { useState, useEffect } from "react";
import {getAllNfts} from "../../../../../services/nftService"


const Collection = () => {
  const router=useRouter();
  const [nfts, setNfts] = useState([]);
  const { gameId } = router.query;
  const { isAuthenticated } = useAuth();
    useEffect(() => {
      if (!isAuthenticated && isAuthenticated != null) Router.push("/login");
      if (router.isReady) {
        getAllNfts({ gameId: gameId }).then((data) => {
          setNfts(data);
          console.log(data)
        });
      }
    }, [gameId, router.isReady, isAuthenticated]);
          return (
            <div>
              {router.isReady ? (
          <div>
            <Row gutter={24}>
            <Col span={4}>
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

          <Row gutter={48} style={{                display: "flex",
                justifyContent: "center",}}>
            {nfts.map((nft) => (
              <Link key={nft._id} href={concatURl("/dashboard/game/:gameId/nft/:nftId",{gameId,nftId: nft._id})}> 
              <div >
                <Col
                  span={24}
                  style={{
                    
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop:"50px"
                    
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
        

export default Collection;