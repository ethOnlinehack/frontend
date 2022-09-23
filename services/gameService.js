import { httpClient } from "./httpService";
import { API } from "./routes";

const createGame = (data) => {
  return httpClient(API.GAME.CREATE, null, data);
};

export { createGame };
