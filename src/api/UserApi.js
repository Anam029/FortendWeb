import api from "./axios";

export async function Get(userdata) {
    const response = await api.get(`/user/me`,userdata)
    return response.data
}