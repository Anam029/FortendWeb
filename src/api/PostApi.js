import api from "./axios"
export default async function GetPost(){
          const response = await api.get(`/post`)
          return response.data
}