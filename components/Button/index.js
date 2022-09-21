import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import css from "./button.module.scss"

const ButtonComponent = ({children, loading, onClick, style,...others}) => {
  return (
    <>  
        <Button  style={style} className={css.btn} onClick={onClick} loading={loading} {...others}>
          {children}
        </Button>  
    </>
  );
};

export default ButtonComponent;
