import actionType from "../actions/actionType";
const initState = {
    list: [
        {
            hasRead: false,
            id: 1,
            title: '11111',
            desc: 'alksdjfklasdjfjasdfjkasjdfjajsdfjasdfj',
        },
        {
            hasRead: false,
            id: 2,
            title: '2222',
            desc: 'a中国人民站起来了lksdjfklasdjfjasdfjkasjdfjajsdfjasdfj',
        }
    ],
    isLoading: false
}
export default (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_AS_READ:
            const list = state.list.map(item => {
                if(item.id === action.payload.id) {
                    item.hasRead = true
                }
                return item
            })
            return {
                ...state,
                list
            }
        case actionType.SET_ALL_AS_READ:
            return {
                ...state,
                list: state.list.map(item => {
                    item.hasRead = true
                    return item
                })
            }
        case actionType.SET_AS_READ_START:
            return {
                ...state,
                isLoading: true
            }
        case actionType.SET_AS_READ_END:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}