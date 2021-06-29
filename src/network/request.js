import axios from "axios";

export function request(confing) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    instance.interceptors.request.use(confing => {
        return confing
    }, err => {})

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {})
    return instance(confing)
}