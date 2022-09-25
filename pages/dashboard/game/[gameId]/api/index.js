import { Collapse } from 'antd';
import { Space, Table, Tag } from 'antd';
import React from 'react';
const { Panel } = Collapse;

const ApiReference = {
  post: [
    {
      url: "/api/v1/gamer-sign-in",
      description: "login or register the gamer",
      input: [
        {
          name: "wallet_address",
          type: "string",
          description: "Gamer's wallet address",
        },
      ],
      response: {
        200: {
          message: `
          {
              wallet_address: string ,
              game_id: string,
              quantity: {"nftID": int},
              nfts: ["nftObject"]
          }`,
          type: "json",
        },
      },
    },
  ],
  get: [
    {
      url: "/api/v1/verify/:walletAddress/:nftId",
      description: "Verify the quanity of a specific Nft a gamer owns",
      parameters: [
        {
          name: "walletAddress",
          type: "string",
          description: "the wallet of the gamer",
        },
        {
          name: "nftId",
          type: "string",
          description: "Id of the NFT in the database",
        },
      ],
      response: {
        200: {
          message: "nftQuantity",
          type: "string",
        },
      },
    },
    {
      url: "/api/v1/get-all-nfts",
      description: "Retrieve all Nfts of the game",
      response: {
        200: {
          message: `[
              {nftObject}
          ]` ,
          type: "json",
        },
      },
    },
    {
      url: "/api/v1/get-all-nfts/:walletAddress",
      description: "Retrieve a gamer's Nfts",
      parameters: [
        {
          name: "walletAddress",
          type: "string",
          description: "the wallet of the gamer",
        }
      ],
      response: {
        200: {
          message: `{
              wallet_address:string,
              game_id:string,
              quantity:{"nftID":quantity},
              nfts:[{NftObject}]
            }`,
          type: "Json",
        },
      },
    },
  ],
};


const inputColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (text) => <a>{text}</a>,
  },  
];

const parametersColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (text) => <a>{text}</a>,
  },  
];

const responseColumns = [
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (text) => <a>{text}</a>,
  },  
];

const data= [{
  code:200,
  message: `
          {
              wallet_address: string ,
              game_id: string,
              quantity: {"nftID": int},
              nfts: ["nftObject"]
          }`,
  type: "json",
}]

const data1= [{
  code:200,
  message: "nftQuantity",
          type: "string",
}]

const data2= [{
  code:200,
  message: `[
    {nftObject}
]` ,
type: "json",
}]

const data3= [{
  code:200,
  message: `{
    wallet_address:string,
    game_id:string,
    quantity:{"nftID":quantity},
    nfts:[{NftObject}]
  }`,
type: "Json",
}]

const genExtra = () => (
  <div style={{gutter:"24"}}>
  <span style={{color: 'green'}}> POST </span>
  <span style={{fontWeight:'bold'}}>     /api/v1/gamer-sign-in </span>
  <span>     login or register the gamer </span>
  </div>
);

const genExtraa = () => (
  <>
  <span style={{color: 'green'}}> GET </span>
  <span style={{fontWeight:'bold'}}>      /api/v1/verify/:walletAddress/:nftId </span>
  <span>     Verify the quanity of a specific Nft a gamer owns </span>
  </>
);

const genExtraaa = () => (
  <>
  <span style={{color: 'green'}}> GET </span>
  <span style={{fontWeight:'bold'}}> /api/v1/get-all-nfts </span>
  <span> Retrieve all Nfts of the game </span>
  </>
);

const genExtraaaa = () => (
  <>
  <span style={{color: 'green'}}> GET </span>
  <span style={{fontWeight:'bold'}}> /api/v1/get-all-nfts/:walletAddress</span>
  <span> the wallet of the gamer </span>
  </>
);




const Api = () => {
  return (
    <>
    <Collapse accordion>
      <Panel header={genExtra()} key="1">
        <Table columns={inputColumns} dataSource={ApiReference.post[0].input} pagination={false} title={() => 'INPUT'}/>
        <Table columns={responseColumns} dataSource={data} pagination={false} title={() => 'RESPONSE'}/>
      </Panel>

    <Panel header={genExtraa()} key="2">
      <Table columns={parametersColumns} dataSource={ApiReference.get[0].parameters} pagination={false} title={() => 'Parameters'}/>
      <Table columns={responseColumns} dataSource={data1} pagination={false} title={() => 'RESPONSE'}/>
    </Panel>

    <Panel header={genExtraaa()} key="3">
      <Table columns={responseColumns} dataSource={data2} pagination={false} title={() => 'RESPONSE'}/>
    </Panel>

    <Panel header={genExtraaaa()} key="4">
      <Table columns={parametersColumns} dataSource={ApiReference.get[2].parameters} pagination={false} title={() => 'Parameters'}/>
      <Table columns={responseColumns} dataSource={data} pagination={false} title={() => 'RESPONSE'}/>
    </Panel>
  </Collapse>
    </>
  );
};


export default Api;




