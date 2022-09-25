import React, { useEffect, useState } from "react";
import CardImage from "../../../../../../components/CardImage/index";
import { Col, Card, Row, Image, Typography, Divider } from "antd";
import SimpleCard from "../../../../../../components/SimpleCard";
import { useAuth } from "../../../../../../contexts/Auth";
import Router, { useRouter } from "next/router";
import { getOneNft } from "../../../../../../services/nftService";
const { Title } = Typography;

const Nft = () => {
  const [visible, setVisible] = useState(false);
  const [nft, setNft] = useState({});
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const { nftId } = router.query;
  useEffect(() => {
    if (!isAuthenticated && isAuthenticated != null) Router.push("/login");
    if(router.isReady){
      getOneNft({ nftId: nftId }).then((data) => {
        setNft(data)
      });
    }
      
  }, [router.isReady]);
  return (
    <>
    {router.isReady ? (
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
          <div style={{ marginTop: "100px" }}>
            <Image
              preview={{ visible: false }}
              src={nft.ipfs_card_uri}
              alt="example"
              onClick={() => setVisible(true)}
            />
          </div>
          <div style={{ display: "none" }}>
            <Image.PreviewGroup
              preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
            >
              <Image src={nft.ipfs_card_uri} alt="example" />
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
              borderRadius: "10px",
              marginTop: "100px",
            }}
          >
            <div style={{ color: "white" }}>
              <Title level={3} style={{ color: "white" }}>
                {" "}
                Nft name:
              </Title>{" "}
              {nft.name}
              <Divider style={{ background: "#2c613b" }} />
              <Title level={3} style={{ color: "white" }}>
                {" "}
                Nft Description:
              </Title>{" "}
              {nft.description}
            </div>
          </Card>
        </Col>
      </Row>
    </div> ): ("")}
    </>
  );
};

export default Nft;
