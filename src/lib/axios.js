import axios from 'axios'
import { baseURL } from '../config'
import { message } from 'antd'

// HttpRequest class
class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseURL
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {}
        }
        return config
    }
    // 注册拦截器
    interceptors(instance) {
        instance.interceptors.request.use(config => {
            // loading and token
            return config
        }, err => {
            Promise.reject(err)
        })
        instance.interceptors.response.use(response => {
            // code 0 1  success failed
            // msg   all messages will be take in here!
            // data   json data will be take in this field

            // const result = response.data
            // if (result.code === 0) {
            //     return result
            // }else{
            //     message.error(result.msg)
            // }
            return response.data
        }, err => {
            Promise.reject(err)
        })
    }
    request(options) {
        const instance = axios.create()
        this.interceptors(instance)
        options = Object.assign({}, this.getInsideConfig(), options)
        return instance(options)
    }
}

export default HttpRequest
