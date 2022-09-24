import { httpClient } from "./httpService";
import { API } from "./routes";

const createNft = (data) => {
  return httpClient(API.NFT.CREATE, null, data);
};

const getAllNfts = (params) => {
  return httpClient(API.NFT.GET_ALL, params, null);
};

const getOneNft = (params) => {
  return httpClient(API.NFT.GET_ONE, params, null);
};

export { createNft, getAllNfts, getOneNft };
