import {
    NotFound,
    Login,
    A,
    B
} from '../pages'

// 注册， 登录， 全局404
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

// 右侧视图
const adminRouter = [
    {
        pathname: '/admin/a',
        component: A
    },
    {
        pathname: '/admin/b',
        component: B
    },
    {
        pathname: '/admin/404',
        component: NotFound
    }
]

export {
    mainRouter,
    adminRouter
}
