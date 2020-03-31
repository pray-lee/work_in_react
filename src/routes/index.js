import React from 'react'
import {Login, NotFound} from "../pages";

// 注册， 登录， 全局404
const mainRoutes = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    },
]

// 右侧视图
// 右侧试图两个部分组成的， 一个是后台返回来的菜单生成，另外一个是自己手动加进去的和菜单没有关系的路由
const ROUTE_CONFIG = []
const adminRoutes = routes => {
    routes.forEach(route => {
        if (route.children && route.children.length) {
            adminRoutes(route.children, ROUTE_CONFIG)
        } else {
            ROUTE_CONFIG.push({
                pathname: route.pathname,
                component: React.lazy(() => import(`../pages/${route.pathname.split('/').pop()}`))
            })
        }
    })
    // 这里手动增加不是导航点击的路由
    // reset password
    ROUTE_CONFIG.push({
        pathname: '/ResetPassword',
        component: React.lazy(() => import(`../pages/ResetPassword`))
    })
    // notification
    ROUTE_CONFIG.push({
        pathname: '/Notification',
        component: React.lazy(() => import(`../pages/Notification`))
    })
    return ROUTE_CONFIG
}

export {
    mainRoutes,
    adminRoutes
}
