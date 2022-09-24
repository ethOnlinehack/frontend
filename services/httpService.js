import axios from "axios";
import urlcat from "urlcat";

const baseURL = "http://localhost:3001";
const METHOD = { GET: "get", POST: "post", PUT: "put", DELETE: "delete" };

// create client instance
const axiosClient = axios.create({
  baseURL: baseURL,
  timeout: 15000,
  withCredentials: true,
  headers: { "X-Custom-Header": "foobar" },
});
//check headers
// axiosClient.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = "Bearer "+ localStorage.getItem('access-token');
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// API ={method:"post", url:"/x/:id/:uid"}
const httpClient = async (API, params = null, data = null) => {
  const URL = urlcat(API.URL, params);
  if (API.METHOD == METHOD.GET) {
    return new Promise(async (resolve, reject) => {
      await axiosClient[API.METHOD](URL)
        .then((data) => {
          resolve(data.data);
        })
        .catch((e) => reject(e));
    });
  } else {
    return new Promise(async (resolve, reject) => {
      await axiosClient[API.METHOD](URL, data)
        .then((data) => resolve(data.data))
        .catch((e) => reject(e));
    });
  }
};

const concatURl = ( url, params) =>urlcat(url, params);

export { METHOD, httpClient, concatURl };
