import axios from "axios"
import { AccessToken, UserLoginInfo } from "../types/Login.type"
import { ErrorAPi } from "../types/Api.type"
import SessionStorageService from "./SessionStorage.service"

const URL = `http://localhost:8000`

class AuthService {
    async logIn(credentials: UserLoginInfo ): Promise<AccessToken | ErrorAPi> {
        return axios.post(URL+'/login', credentials).then((respose) => {
            SessionStorageService.saveAccesToken(respose.data)
            return respose.data;
        }).catch((e) => {
            return e.response.data
        })
    }

    logout() {
        SessionStorageService.deleteAccesToken()
    }

}

export default new AuthService