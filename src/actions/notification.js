import actionType from "./actionType";

// 每一次操作数据，都需要触发一个action

// 模仿异步
export const setAsRead = id => {
    return dispatch => {
        dispatch(setReadStart())
        setTimeout(() => {
            dispatch({
                type: actionType.SET_AS_READ,
                payload: {
                    id
                }
            })
            dispatch(setReadEnd())
        }, 1000)
    }
}

export const setAllAsRead = () => {
    return dispatch => {
        dispatch(setReadStart())
        // 模仿请求
        setTimeout(() => {
            dispatch({
                type: actionType.SET_ALL_AS_READ
            })
            dispatch(setReadEnd())
        }, 2000)
    }
}

export const setReadStart = () => ({
    type: actionType.SET_AS_READ_START
})

export const setReadEnd = () => ({
    type: actionType.SET_AS_READ_END
})

export const updateList = list => ({
    type: actionType.UPDATE_LIST,
    payload: {
        list
    }
})
