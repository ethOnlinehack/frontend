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
  GAME: {
    CREATE: {
      METHOD: METHOD.POST,
      URL: "/game/create",
    },
    GET_ALL: {
      METHOD: METHOD.GET,
      URL: "/game/get-all",
    },
    GET_ONE: {
      METHOD: METHOD.GET,
      URL: "/game/get-one/:gameId",
    },
  },
  NFT: {
    CREATE: {
      METHOD: METHOD.POST,
      URL: "/nft/create",
    },
    GET_ONE: {
      METHOD: METHOD.GET,
      URL: "/nft/get-one/:nftId",
    },
    GET_ALL: {
      METHOD: METHOD.GET,
      URL: "/nft/get-all/:gameId",
    },
  },
};
