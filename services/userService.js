import { httpClient } from "./httpService";
import { API } from "./routes";

const login = (data) => {
  return httpClient(API.USER.LOGIN, null, data);
};

const register = (data) => {
  return httpClient(API.USER.REGISTER, null, data);
};

const logout = (data) => {
  return httpClient(API.USER.LOGOUT, null, data);
};

const testaa = (data) => {
    return httpClient(API.TEST, null, null);
  };
  
export { login, register, logout, testaa };
