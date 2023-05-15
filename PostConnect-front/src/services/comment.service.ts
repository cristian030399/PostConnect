import axios from "axios"
import { AccessToken, UserLoginInfo } from "../types/Login.type"
import { ErrorAPi } from "../types/Api.type"
import authHeader from "./authHeader"

const URL = `http://localhost:8000/comments`

class CommentService {
    // async getPosts() {
    //     return axios.get(URL, {headers: authHeader}).then((response) => {
    //         return response.data
    //     }).catch((e) => {
    //         return e.response.data
    //     })
    // }

    async getComments(idPost: string) {
        return axios.get(`${URL}/?id_post=${idPost}`, {headers: authHeader}).then((response) => {
            return response.data
        }).catch((e) => {
            return e.response.data
        })
    }

    async addComment(comment: any) {
        return axios.post(URL, comment, {headers: authHeader}).then((response) => {
            return response.data
        }).catch((e) => {
            return e.response.data
        })
    }
}

export default new CommentService