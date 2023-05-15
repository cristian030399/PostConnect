import { AccessToken } from "../types/Login.type"

class SessionStorageService {
    isLogged(): boolean {
        const accesToken = sessionStorage.getItem('accesToken')
        return !!accesToken;
    }

    saveAccesToken(accesToken: AccessToken): void {
        sessionStorage.setItem('accesToken', JSON.stringify(accesToken))
    }

    getAccesToken() {
        const accesToken = sessionStorage.getItem('accesToken')
        if(!accesToken) return {}
        return JSON.parse(accesToken)

    }

    deleteAccesToken() {
        sessionStorage.removeItem('accesToken')
    }
}

export default new SessionStorageService