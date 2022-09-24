import React, { useState } from "react";
import { Formik, Form } from "formik";
import ButtonComponent from "../../../components/Button";
import InputText from "../../../components/Form/InputText";
import SimpleCard from "../../../components/SimpleCard";
import Router from "next/router";
import * as Yup from "yup";
import { createGame } from "../../../services/gameService";
import TextAreaComponent from "../../../components/Form/TextArea";
import { concatURl } from "../../../services/httpService"
const CreateGameComponent = () => {
  const [loading, setLoading] = useState(false);
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
                Router.push(concatURl("/dashboard/game/:gameId",{gameId:data._id}))              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          <div>
            <Form className="form p-3">
              <label style={{ marginTop: "100px" }}>
                Game name
                <InputText
                  type="text"
                  name="game_name"
                  placeholder="Game name"
                />
              </label>
              <label>
                Game description
                <TextAreaComponent
                  type="text"
                  name="game_description"
                  placeholder="Game description"
                />
              </label>
              <ButtonComponent
                style={{ width: "100%",marginTop:"20px" }}
                htmlType="submit"
                loading={loading}
              >
                Create new game
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
  game_name: "",
};

export default CreateGameComponent;
