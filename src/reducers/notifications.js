const initState = [
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
]
export default (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
}