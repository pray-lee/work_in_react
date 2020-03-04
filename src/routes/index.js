import {
    NotFound,
    Login
} from '../pages'

const mainRouter = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    }
]

export {
    mainRouter
}
