import actionType from "../actions/actionType";

const rowData = {
    data: [],
    isLoading: false
}

console.log('-----------------reducers--------------------------')
export default (state = rowData, action) => {
    const payload = action.payload
    switch (action.type) {
        case actionType.TABLE_LOADING_START:
            return {
                ...state,
                isLoading: true
            }
        case actionType.TABLE_LOADING_END:
            return {
                ...state,
                isLoading: false
            }
        case actionType.TABLE_LOADING_SUCCESS:
            return {
                data: payload.data,
                isLoading: false
            }
        default:
            return state
    }
}
