import { Card } from "antd";
import React from "react";
const { Meta } = Card;
import { EditOutlined, DeleteOutlined, EllipsisOutlined, MenuOutlined   } from '@ant-design/icons';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
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
        <Menu mode="horizontal" style={{opacity:"20%", width:"64px"}}>
    <Menu.SubMenu key="SubMenu" icon={<MenuOutlined />} >
      <Menu.Item key="two" icon={<EditOutlined  />}>
        Edit
      </Menu.Item>
      <Menu.Item key="three" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
      </Menu.SubMenu>
    </Menu>
    <Meta style={{height:"20px", color:"white", fontSize:"50px",textAlign:"center"}}  title="RobinMania" />

  </Card>
);

export default CardImage;
