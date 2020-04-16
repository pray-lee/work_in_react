import actionType from "./actionType";
import {message} from 'antd'
import axios from '../request'

export const loginStart = () => ({
    type: actionType.LOGIN_START
})
export const loginSuccess = userInfo => ({
    type: actionType.LOGIN_SUCCESS,
    payload: {
        userInfo
    }
})
export const loginFailed = () => {
    window.localStorage.removeItem('authToken')
    window.sessionStorage.removeItem('authToken')
    window.localStorage.removeItem('userInfo')
    window.sessionStorage.removeItem('userInfo')
    return {
        type: actionType.LOGIN_FAILED
    }
}

export const requestLogin = userInfo => {
    return dispatch => {
        dispatch(loginStart())
        axios.request({
            url: `/oauth/token?grant_type=password&username=${userInfo.username}&password=${userInfo.password}&client_id=webClient&client_secret=web123456`,
            method: 'get'
        }).then(res => {
            // 汇总用户信息
            const userLoginedInfo = Object.assign({}, {...userInfo}, {...res})
            if (!!res && res.access_token) {
                if(userInfo.remember) {
                    window.localStorage.setItem('authToken', res.access_token)
                    window.localStorage.setItem('userInfo', JSON.stringify(userLoginedInfo))
                }else{
                    window.sessionStorage.setItem('authToken', res.access_token)
                    window.sessionStorage.setItem('userInfo', JSON.stringify(userLoginedInfo))
                }
                dispatch(loginSuccess(userLoginedInfo))
            }else{
                dispatch(loginFailed())
                message.error('用户名或密码错误')
            }
        })
    }
}

