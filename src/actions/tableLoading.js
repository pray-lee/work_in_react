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

export const requestTable = () => {
// test data
    const rowData = []
    for (var i = 0; i < 100; i++) {
        rowData.push({
            a: Math.random(),
            b: Math.random(),
            c: Math.random(),
            d: Math.random(),
            e: Math.random(),
            f: Math.random(),
            g: Math.random(),
            h: Math.random(),
            i: Math.random(),
            j: Math.random(),
            k: Math.random(),
            l: Math.random(),
            m: Math.random(),
            n: Math.random(),
            o: Math.random(),
            p: Math.random(),
        })
    }
    return dispatch => {
       dispatch(tableLoadingStart())
       setTimeout(() => {
           console.log('action', rowData)
           dispatch(tableLoadingSuccess(rowData))
       }, 2000)
    }
}
