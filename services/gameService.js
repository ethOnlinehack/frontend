import { httpClient } from "./httpService";
import { API } from "./routes";

const createGame = (data) => {
  return httpClient(API.GAME.CREATE, null, data);
};

const getAllGames = (params) => {
  return httpClient(API.GAME.GET_ALL, params, null);
};

const getOneGame = (params) => {
  return httpClient(API.GAME.GET_ONE, params, null);
};

export { createGame, getAllGames, getOneGame };
