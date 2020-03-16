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
    return ROUTE_CONFIG
}



export {
    mainRoutes,
    adminRoutes
}
