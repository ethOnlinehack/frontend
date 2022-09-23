import { httpClient } from "./httpService";
import { API } from "./routes";

const createNft = (data) => {
  return httpClient(API.NFT.CREATE, null, data);
};

export { createNft };
