import { httpClient } from "./httpService";
import { API } from "./routes";

const createGame = (data) => {
  return httpClient(API.GAME.CREATE, null, data);
};

const getAllGames = () => {
  return httpClient(API.GAME.GET_ALL,null, null);
};

const getOneGame = (params) => {
  return httpClient(API.GAME.GET_ONE, params, null);
};

export { createGame, getAllGames, getOneGame };
