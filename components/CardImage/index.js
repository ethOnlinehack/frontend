import { Card } from "antd";
import React from "react";
const { Meta } = Card;
import { EditOutlined, DeleteOutlined   } from '@ant-design/icons';
import { Menu } from 'antd';
import css from "./cardImage.module.scss";
import Image from 'next/image';
const CardImage = ({image, title})=> (
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
      
      <Image src={image} alt="example" layout="responsive" width="100px" height="100px"/>
      
    }
  >
 
    <Meta style={{height:"20px", color:"white", fontSize:"50px",textAlign:"center"}}  title={title} />

  </Card>
);

export default CardImage;
