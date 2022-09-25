import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import React from 'react';


const FileUpload = ({url, maxCount, onChange , ...others}) => (
  <Upload 
    action={"http://localhost:3001"+ url}
    maxCount={maxCount}
    onChange={onChange}
    {...others}
  >
    <Button style={{width:"100%", height:"100%", fontSize:"12px", borderRadius:"8px", marginLeft:"10px", backgroundColor:"#5EBB79", borderColor:"#5EBB79", color:"white"}} icon={<UploadOutlined />} >Click to Upload</Button>
  </Upload>
);

export default FileUpload;