import {
    NotFound,
    Login,
    Settings,
    Article,
    ArticleDetail,
    Dashboard,
    Notification
} from '../pages'

// 引入icon
import {
    PieChartOutlined,
    BarChartOutlined,
    DingdingOutlined
} from '@ant-design/icons'

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
        // 如果需要点击跳转加这个标识就可以
        isNav: true,
        title: '仪表盘',
        // 导航的icon
        icon: PieChartOutlined
    },
    {
        pathname: '/admin/article',
        component: Article,
        exact: true,
        isNav: true,
        title: '文章管理',
        icon: BarChartOutlined
    },
    {
        pathname: '/admin/article/:id',
        component: ArticleDetail,
    },
    {
        pathname: '/admin/settings',
        component: Settings,
        isNav: true,
        title: '设置',
        icon: DingdingOutlined
    },
    {
        pathname: '/admin/notification',
        component: Notification,
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
