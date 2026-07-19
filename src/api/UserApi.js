import api from "./axios";

export async function GetCurrentUser() {
    const response = await api.get(`/user/me`)
    return response.data
}

export async function GetUserProfile(username) {
    const response = await api.get(`/user/${username}`)
    return response.data
}

export async function SearchUser(keyword){
    const response = await api.get(`/user/search?keyword=${keyword}`)
    return response.data.users
}