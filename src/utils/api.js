import { getToken } from "./token";

export const BASE_URL = "https://api.nomoreparties.co";

export const getUserInfo = (getToken) => {
    return fetch(`${BASE_URL}/users/me`,{
        method: "GET",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((res)=>{
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    }
)
}