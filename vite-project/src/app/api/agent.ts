import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.log("caught by interceptor");
    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Content = {
  list: () => requests.get("content"),
  details: (id: number) => requests.get(`content/${id}`),
};
const TestErros = {
  get400Error: () => requests.get(`bugg/bad-request`),
  get401Error: () => requests.get(`bugg/unauthorised`),
  get404Error: () => requests.get(`bugg/not-found`),
  get500Error: () => requests.get(`bugg/server-error`),
  getValidationError: () => requests.get(`bugg/validation-error`),
};
const agent = {
  Content,
  TestErros,
};
export default agent;
