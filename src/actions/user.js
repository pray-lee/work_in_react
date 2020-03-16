import actionType from "./actionType";
import {message} from 'antd'

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
        setTimeout(() => {
            // 请求成功之后，在这里就要加持久化存储了
            if(userInfo.remember) {
                window.localStorage.setItem('authToken', userInfo.authToken)
                window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
            }else {
                window.sessionStorage.setItem('authToken', userInfo.authToken)
                window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
            }
            console.log(userInfo)
            dispatch(loginSuccess(userInfo))
            // 如果失败
            // dispatch(loginFailed())
            // message.error('token过期')
        }, 1000)
    }
}

