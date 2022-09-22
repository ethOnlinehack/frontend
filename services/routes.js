import { METHOD } from "./httpService";

export const API = {
  TEST: {
    METHOD: METHOD.GET,
    URL: "/test",
  },
  USER: {
    LOGIN: {
      METHOD: METHOD.POST,
      URL: "/user/login",
    },
    REGISTER: {
      METHOD: METHOD.POST,
      URL: "/user/register",
    },
    LOGOUT: {
      METHOD: METHOD.POST,
      URL: "/user/logout",
    },
    SIGNIN: {
      METHOD: METHOD.POST,
      URL: "/user/check-token",
    },
  },
  FILE_UPLOAD: {
    METHOD: METHOD.POST,
    URL: "/file/upload",
  },
};
