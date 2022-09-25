import { Tabs } from "antd";
import React from "react";
import Collection from "./nft";
import Api from "./api";
import { useState } from "react";
import {Image } from "antd";
import { useEffect } from "react";
import { useAuth } from "../../../../contexts/Auth";
import Router, { useRouter } from "next/router";
import css from "./tab.module.scss";
import { getOneGame } from "../../../../services/gameService";
import { CopyOutlined } from "@ant-design/icons";
import ButtonComponent from "../../../../components/Button";




const Game = () => {
  const router = useRouter();
  const { gameId } = router.query;
  const { isAuthenticated } = useAuth();
  const [game, setGame] = useState([]);
  useEffect(() => {
    if (!isAuthenticated && isAuthenticated != null) Router.push("/login");
    if(router.isReady){
    getOneGame({gameId:gameId}).then((data) => {
      setGame(data);
      console.log(data)
;    });
    }
  }, [router.isReady]);

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
        <h1 style={{position: "absolute", zIndex: "2", color:"white", marginTop:"125px", display:"inline-block", fontSize:"36px", marginRight:"800px"  }}>
          {game.name}
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
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"60px"}}>
        <h1 style={{color:"white", fontSize:"18px", margin:"0", marginRight:"25px"}}>Access Token:</h1>
      <ButtonComponent 
  onClick={() =>  navigator.clipboard.writeText(game.access_token)}
>
<h1 style={{fontSize:"20px", color:"white", margin:"0", marginRight:"15px"}}>{game.access_token}</h1><CopyOutlined style={{fontSize:"16px", fontWeight:"bold"}} />
</ButtonComponent>
</div>
      <Tabs className={css.tab} type="card" items={items} style={{marginTop:"50px"}} />
      </div>) : (
        " ")}
      
  
  </div>);
};
 

export default Game;
