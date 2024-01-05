import {ApiClient} from "market_place"
import { Cookies } from "react-cookie";

export const Instance = new ApiClient()
Instance.basePath = "http://localhost:8000"
let OAuth2PasswordBearer = Instance.authentications['OAuth2PasswordBearer'];

export function setToken(token, setCookie) { 
    OAuth2PasswordBearer.accessToken = token 
    setCookie(AUTH_KEY, data.access_token); // Устанавливаем cookie с access_token
}

export function isAuthorized(cookies) { 
    const cookie = cookies.get(AUTH_KEY); 
    if (cookie) { 
        return true; 
    } else { 
        return false;
    }
}
