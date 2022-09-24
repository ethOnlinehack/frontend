import React, { useState } from "react";
import ButtonComponent from '../../../../../components/Button';
import { PlusOutlined } from '@ant-design/icons';


const Collection = () => {
    const [loading, setLoading] = useState(false);
          return (
          <div>
            <ButtonComponent
                    htmlType="submit"
                    loading={loading}
                    icon={<PlusOutlined />}
                  >
                  Add NFT
            </ButtonComponent>
            </div>)
}
        

export default Collection;