
export const BASE_URL= "https://api.nomoreparties.co";

export const register=(username,password,email) =>{
    return fetch(`${BASE_URL}/auth/local/register`,{
        method: "POST",
        heathers: {
            accept:"application/json",
        },
        body: JSON.stringify({username, password,email}),
    })
    .then((res)=>{
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    })
}