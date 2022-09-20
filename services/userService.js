import { httpClient } from "./httpService";
import { API } from "./routes";

const login = (params, data) => {
  return httpClient(API.INDEX, params, data);
};

export { login };
