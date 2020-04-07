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
            adminRoutes(route.children)
        } else {
            ROUTE_CONFIG.push({
                pathname: route.pathname,
                component: React.lazy(() => import(`../pages${route.pathname}`))
            })
        }
    })
    return ROUTE_CONFIG
}

export {
    mainRoutes,
    adminRoutes
}
