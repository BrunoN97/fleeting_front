import axios, { AxiosResponse } from "axios";
import { parseCookies } from "nookies";

const { "fleeting-token": token } = parseCookies();

export const apiService = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

if (token) {
  apiService.defaults.headers["Authorization"] = `Bearer ${token}`;
}

type dataAuth = {
  email: string;
  password: string;
};

const authenticatedLogin = async (dataAuth: dataAuth) => {
  const response = (await apiService.post("/authentication/login", dataAuth))
    .data;

  return response;
};

const userFindEmail = async (email: string) => {
  const response = (
    await apiService.get("/users/filter", { params: { email: email } })
  ).data;

  return response;
};

const createUser = async (data) => {
  const response = await apiService.post("/users", data);
  return response.data;
};

const getToDo = async (limit: number, offset: number) => {
  const response = await apiService.get(`/todo?limit=${limit}&skip=${offset}`);
  return { data: response.data[0], total: response.data[1] };
};

export { authenticatedLogin, userFindEmail, createUser, getToDo };
