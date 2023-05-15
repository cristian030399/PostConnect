import SessionStorageService from "./SessionStorage.service";

function authHeader() {
    const token = SessionStorageService.getAccesToken()
    if (token && token.acces_token) {
        return {Authorization: 'Bearer ' + token.acces_token};
    } else {
        return {};
    }
}

export default authHeader()