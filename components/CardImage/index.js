import { Card } from "antd";
import React from "react";
const { Meta } = Card;
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import css from "./cardImage.module.scss"
const CardImage = () => (
  <Card
    className={css.Card}
    hoverable
    style={{
      width: 280,
    }}
    
    actions={[
      <EditOutlined style={{color:"white"}} key="edit" />,
      <DeleteOutlined  style={{color:"white"}}  key="ellipsis" />,
    ]}
    cover={
      <img
        alt="example"
        src="./Cover.png"
      />
    }
  >
    <Meta style={{height:"20px", color:"white", fontSize:"50px",textAlign:"center"}}  title="RobinMania" />
  </Card>
);

export default CardImage;
