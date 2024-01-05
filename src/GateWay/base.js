import {ApiClient} from "market_place"

export const Instance = new ApiClient()
Instance.basePath = "http://localhost:8000"
let OAuth2PasswordBearer = Instance.authentications['OAuth2PasswordBearer'];

function setToken(token) { 
    OAuth2PasswordBearer.accessToken = token 
}