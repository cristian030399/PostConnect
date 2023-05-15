import axios from "axios"
import { AccessToken, UserLoginInfo } from "../types/Login.type"
import { ErrorAPi } from "../types/Api.type"
import authHeader from "./authHeader"

const URL = `http://localhost:8000/posts`

class PostService {
    async getPosts() {
        return axios.get(URL, {headers: authHeader}).then((response) => {
            return response.data
        }).catch((e) => {
            return e.response.data
        })
    }

    async getPost(id: string) {
        return axios.get(`${URL}/${id}`, {headers: authHeader}).then((response) => {
            return response.data
        }).catch((e) => {
            return e.response.data
        })
    }

    async addPost(post: any) {
        return axios.post(URL, post, {headers: authHeader}).then((response) => {
            return response.data
        }).catch((e) => {
            return e.response.data
        })
    }
}

export default new PostService