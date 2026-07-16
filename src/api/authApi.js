


import api from "./axios";

export async function authApi(userData) {
  const response = await api.post("/auth/user/register", userData);
  return response.data;
}