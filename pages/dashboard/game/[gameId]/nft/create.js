import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import ButtonComponent from "../../../../../components/Button";
import InputText from "../../../../../components/Form/InputText";
import SimpleCard from "../../../../../components/SimpleCard";
import FileUpload from "../../../../../components/Upload";
import  Router, {useRouter} from "next/router"
import * as Yup from "yup";
import { API } from "../../../../../services/routes";
import { createNft } from "../../../../../services/nftService";
import TextAreaComponent from "../../../../../components/Form/TextArea";
import { concatURl } from "../../../../../services/httpService";
import { useAuth } from "../../../../../contexts/Auth";

const CreateNft = () => {
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState({ ipfs_uri: null, ipfs_card_uri: null });

  const router = useRouter()
  const { gameId } = router.query
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) Router.push("/login");
  }, []);

  const validate = Yup.object({
    nft_name: Yup.string().required("game name is required!"),
    nft_description: Yup.string(),
  });
  const handleChangeNft = (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      console.log(`${info.file.name} file uploaded successfully`);
      console.log(info.file.response)
      urls.ipfs_uri = info.file.response;
      setUrls(urls);
    } else if (info.file.status === "error") {
      console.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleChangeNftCard = (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      console.log(`${info.file.name} file uploaded successfully`);
      console.log(info)
    console.log(info.file.response)
      urls.ipfs_card_uri = info.file.response;
      setUrls(urls);
    } else if (info.file.status === "error") {
      console.error(`${info.file.name} file upload failed.`);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop:"100px"
      }}
    >
      <SimpleCard title="Create new Nft">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={(values) => { 
            values.ipfs_uri = urls.ipfs_uri;
            values.ipfs_card_uri = urls.ipfs_card_uri
            values.game_id = gameId;
            setLoading(true);
            createNft(values)
              .then((data) => {
                console.log(data);
                Router.push(concatURl("/dashboard/game/:gameId/nft/:nftId",{gameId:gameId,nftId:data._id}))
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          <div style={{        display: "flex",
        alignItems: "center",
        justifyContent: "center",     width:"100%", marginLeft:"100%", marginRight:"100%"}}>
            <Form className="form p-3">
              <label style={{ marginTop: "100px" }}>
                Nft name
                <InputText type="text" name="nft_name" placeholder="Nft name" />
              </label>
              <label>
                Nft description
                <TextAreaComponent type="text" placeholder="Nft description"   name="nft_description"/>
              </label>
              <div style={{marginTop:"20px" }}>
              Upload NFT
              <FileUpload
                withCredentials={true}
                url={API.FILE_UPLOAD.URL}
                maxCount={1}
                onChange={handleChangeNft}
              />
              </div>
              <div style={{marginTop:"20px"}}>
              Upload NFT Card
              <FileUpload
                withCredentials={true}
                url={API.FILE_UPLOAD.URL}
                maxCount={1}
                onChange={handleChangeNftCard}
              />
              </div>
              <ButtonComponent
                style={{ width: "100%", marginTop:"20px" }}
                htmlType="submit"
                loading={loading}
              >
                Create new Nft
              </ButtonComponent>
            </Form>
          </div>
        </Formik>
      </SimpleCard>
    </div>
  );
};

const initialValues = {
  nft_description: "",
  nft_name: "",
};

export default CreateNft;
