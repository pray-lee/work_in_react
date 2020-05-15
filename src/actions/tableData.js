import actionType from "./actionType";

export const tableLoadingStart = () => ({
   type: actionType.TABLE_LOADING_START
})

export const tableLoadingSuccess = data => ({
    type: actionType.TABLE_LOADING_SUCCESS,
    payload: {
        data
    }
})

export const tableLoadingEnd = () => ({
   type: actionType.TABLE_LOADING_END
})
