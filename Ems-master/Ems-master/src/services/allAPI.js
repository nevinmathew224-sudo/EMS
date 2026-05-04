import axios from "axios";

const serverURL ="http://localhost:3001"

export const getALLUsersAPI = async ()=>{
    return await axios.get(`${serverURL}/users`)
}


export const addUsersAPI = async (userData)=>{
    return await axios.post(`${serverURL}/add`,userData)
}


export const editALLUsersAPI = async (userID,userData)=>{
    return await axios.put(`${serverURL}/users/$(userID)`,userData)
}


export const deleteALLUsersAPI = async (userID)=>{
    return await axios.delete(`${serverURL}/users/${userID}`)
}

