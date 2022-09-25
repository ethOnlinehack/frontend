import { Tabs } from "antd";
import React from "react";
import Collection from "./nft";
import Api from "./api";

const Tab = () => {
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
  return <Tabs type="card" items={items} />;
};

export default Tab;
