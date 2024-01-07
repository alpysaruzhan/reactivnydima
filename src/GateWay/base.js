import {ApiClient} from "market_place"
import { AUTH_KEY } from "./consts";

export const Instance = new ApiClient()
if (process.env.HOST === null || process.env.HOST === undefined) {
    Instance.basePath = "http://localhost:8000"
} else { 
    Instance.basePath = process.env.HOST
}
let OAuth2PasswordBearer = Instance.authentications['OAuth2PasswordBearer'];

export function setToken(token, setCookie) { 
    setAccessTokenForClient(token)
    setCookie(AUTH_KEY, token, {
        path: '/', 
    }); // Устанавливаем cookie с access_token
}

function setAccessTokenForClient(token) { 
    if (
        OAuth2PasswordBearer.accessToken === null ||
        OAuth2PasswordBearer.accessToken === undefined ||
        OAuth2PasswordBearer.accessToken !== token
    ) { 
        OAuth2PasswordBearer.accessToken = token 
    }
}

export function isAuthorized(cookies) { 
    const cookie = cookies.get(AUTH_KEY); 
    if (cookie) { 
        setAccessTokenForClient(cookie)
        return true; 
    } else { 
        return false;
    }
}
