import actionType from "../actions/actionType";
// 这里的初始状态就应该用持久化存储的东西去判断了
const isLogin = !!(window.localStorage.getItem('authToken')) ||
    !!(window.sessionStorage.getItem('authToken'))
const userInfo = JSON.parse(window.localStorage.getItem('userInfo') ||
    window.sessionStorage.getItem('userInfo'))
const initState = {
    ...userInfo,
    isLogin,
    isLoading: false,
}
export default (state = initState, action) => {
    switch (action.type) {
        case actionType.LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload.userInfo,
                isLogin: true,
                isLoading: false
            }
        case actionType.LOGIN_FAILED:
            return {
                isLogin: false,
                isLoading: false
            }
        default:
            return state
    }
}
