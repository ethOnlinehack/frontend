import React, { useState } from "react";
import { Formik, Form } from "formik";
import ButtonComponent from "../../../../../components/Button";
import InputText from "../../../../../components/Form/InputText";
import SimpleCard from "../../../../../components/SimpleCard";
import Router from "next/router";
import * as Yup from "yup";
import { createGame } from "../../../../../services/gameService";
import FileUpload from "../../../../../components/Upload";
import { API } from "../../../../../services/routes";
import { EditableProTable } from '@ant-design/pro-components';


const defaultData= new Array(20).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: `活动名称${index}`,
    decs: '这个活动真好玩',
    state: 'open',
    created_at: '1590486176000',
  };
});
const CreateNft = () => {
  const [loading, setLoading] = useState(false);
  const [editableKeys, setEditableRowKeys] = useState(() =>
  defaultData.map((item) => item.id),
);
const [dataSource, setDataSource] = useState(() => defaultData);
  const handleChange = (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      console.error(`${info.file.name} file upload failed.`);
    }
  };
  const columns = [
    {
      title: '活动名称',
      dataIndex: 'title',
      width: '30%',
      formItemProps: {
        rules: [
          {
            required: true,
            whitespace: true,
            message: '此项是必填项',
          },
          {
            message: '必须包含数字',
            pattern: /[0-9]/,
          },
          {
            max: 16,
            whitespace: true,
            message: '最长为 16 位',
          },
          {
            min: 6,
            whitespace: true,
            message: '最小为 6 位',
          },
        ],
      },
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      },
    },
    {
      title: '描述',
      dataIndex: 'decs',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 250,
      render: () => {
        return null;
      },
    },
  ];

  const validate = Yup.object({
    game_name: Yup.string().required("game name is required!"),
    game_description: Yup.string(),
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SimpleCard title="Create new game">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => {
            setLoading(true);
            createGame(values)
              .then((data) => {
                console.log(data);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          <div>
            <Form>
              <label style={{ marginTop: "100px" }}>
                Nft name:
                <InputText type="text" name="nft_name" placeholder="Nft name" />
              </label>
              <label>
                Nft description
                <InputText
                  type="text"
                  name="nft_description"
                  placeholder="Nft description"
                />
              </label>
              <FileUpload
                withCredentials={true}
                url={API.FILE_UPLOAD.URL}
                maxCount={1}
                onChange={handleChange}
              />

              <EditableProTable
                headerTitle="hello"
                columns={columns}
                rowKey="id"
                scroll={{
                  x: 960,
                }}
                value={dataSource}
                onChange={setDataSource}
                recordCreatorProps={{
                  newRecordType: "dataSource",
                  record: () => ({
                    id: Date.now(),
                  }),
                }}
                toolBarRender={() => {
                  return [
                    <Button
                      type="primary"
                      key="save"
                      onClick={() => {
                        // dataSource 就是当前数据，可以调用 api 将其保存
                        console.log(dataSource);
                      }}
                    >
                      保存数据
                    </Button>,
                  ];
                }}
                editable={{
                  type: "multiple",
                  editableKeys,
                  actionRender: (row, config, defaultDoms) => {
                    return [defaultDoms.delete];
                  },
                  onValuesChange: (record, recordList) => {
                    setDataSource(recordList);
                  },
                  onChange: setEditableRowKeys,
                }}
              />

              <ButtonComponent
                style={{ width: "100%" }}
                htmlType="submit"
                loading={loading}
              >
                Create new nft
              </ButtonComponent>
            </Form>
          </div>
        </Formik>
      </SimpleCard>
    </div>
  );
};

const initialValues = {
  game_description: "",
  game_name: null,
};

export default CreateNft;
