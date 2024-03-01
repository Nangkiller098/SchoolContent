import axios, { AxiosError, AxiosResponse } from "axios";
import { Content } from "../models/Content";
import { Article } from "../models/Article";

//set sleep request api for 10000 second
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api/";
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    return response;
  },
  (error: AxiosError) => {
    console.log("caught by interceptor");
    return Promise.reject(error.response);
  }
);

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: object) =>
    axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Content = {
  list: () => requests.get<Content[]>("content"),
  details: (id: string) => requests.get<Content>(`content/${id}`),
  create: (content: Content) => requests.post<void>(`content`, content),
  update: (content: Content) =>
    requests.put<void>(`content/${content.id}`, content),
  delete: (id: string) => requests.delete<void>(`content/${id}`),
};

const Article = {
  list: () => requests.get<Article[]>("/article"),
  details: (id: string) => requests.get<Article>(`Article/${id}`),
  create: (article: Article) => requests.post<void>(`article`, article),
  update: (article: Article) =>
    requests.put<void>(`content/${article.id}`, article),
  delete: (id: string) => requests.delete<void>(`article/${id}`),
};

const TestErros = {
  get400Error: () => requests.get(`bugg/bad-request`),
  get401Error: () => requests.get(`bugg/unauthorised`),
  get404Error: () => requests.get(`bugg/not-found`),
  get500Error: () => requests.get(`bugg/server-error`),
  getValidationError: () => requests.get(`bugg/validation-error`),
};
const agent = {
  Article,
  Content,
  TestErros,
};
export default agent;
