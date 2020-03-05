import {
    NotFound,
    Login,
    Settings,
    Article,
    ArticleDetail,
    Dashboard
} from '../pages'

// 注册， 登录， 全局404
const mainRoutes = [
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
const adminRoutes = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard,
        isNav: true,
        title: '仪表盘'
    },
    {
        pathname: '/admin/article',
        component: Article,
        exact: true,
        isNav: true,
        title: '文章管理'
    },
    {
        pathname: '/admin/article/:id',
        component: ArticleDetail,
    },
    {
        pathname: '/admin/settings',
        component: Settings,
        isNav: true,
        title: '设置'
    },
    {
        pathname: '/admin/404',
        component: NotFound
    }
]

export {
    mainRoutes,
    adminRoutes
}
