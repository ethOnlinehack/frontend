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
    <Button icon={<UploadOutlined />} >Click to Upload</Button>
  </Upload>
);

export default FileUpload;