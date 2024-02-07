import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

type dataAuth = {
  email: string;
  password: string;
};

type resToken = {
  token: string;
  emailtype: string;
};

const authenticatedLogin = async (dataAuth: dataAuth) => {
  const response = (await apiService.post("/authentication/login", dataAuth))
    .data;

  console.log(response);
  console.log("response");
  return response;
};

const createUser = async (data) => {
  const response = await apiService.post("/users", data);
  return response.data;
};

export { authenticatedLogin };
