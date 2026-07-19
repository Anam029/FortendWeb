import api from "./axios";

export async function GetCurrentUser() {
    const response = await api.get(`/user/me`)
    return response.data
}

export async function GetUserProfile() {
    const response = await api.get(`/user/:username`)
    return response.data
}

export async function SearchUser(){
    const response = await api.get(`/user/search`)
    return response.data
}