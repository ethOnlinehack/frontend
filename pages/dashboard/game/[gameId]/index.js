import { Tabs } from "antd";
import React from "react";
import Collection from "./nft";
import Api from "./api";
import { useState } from "react";
import {Image } from "antd";
import { useEffect } from "react";
import { useAuth } from "../../../../contexts/Auth";
import Router, { useRouter } from "next/router";




const Game = () => {
  const router = useRouter();
  const { gameId } = router.query;
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated && isAuthenticated != null) Router.push("/login");
  }, [gameId, router.isReady, isAuthenticated]);

  const items = [
    {
      label: "NFT Collection",
      key: 1,
      children: <Collection />,
    },
    {
      label: "API References",
      key: 2,
      children: <Api />,
    },
  ];
  return (
    <div>
  {router.isReady ? (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{position: "absolute", zIndex: "2", color:"white", marginTop:"125px", display:"inline-block", fontSize:"36px"  }}>
          Game Name
        </h1>
      </div>
      <Image
         src="/testCover.jpg"
         style={{ opacity: "0.3", zIndex: "1", objectFit: "cover" }}
         alt="example"
         width="100%"
         height="300px"
         preview={false}
      />
      <Tabs type="card" items={items} style={{marginTop:"50px"}} />
      </div>) : (
        " ")}
      
  
  </div>);
};
 

export default Game;
