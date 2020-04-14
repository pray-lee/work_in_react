// 这个是简易的loadable
import Loadable from "../react_loadable_by_self";

// 这个是官方的
// import Loadable from 'react-loadable'

import {
    Loading
} from "../components";
// 普通方式
// 路由懒加载方式
const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading
})

const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading
})

// const Dashboard = Loadable({
//     loader: () => import('./DanJu/Yingshou'),
//     loading: Loading
// })
//
// const Settings = Loadable({
//     loader: () => import('./Settings'),
//     loading: Loading
// })
//
// const Article = Loadable({
//     loader: () => import('./Article'),
//     loading: Loading,
// })
//
// const ArticleDetail = Loadable({
//     loader: () => import('./Article/Detail'),
//     loading: Loading
// })
// const Notification = Loadable({
//     loader: () => import('./Notification'),
//     loading: Loading
// })

export {
    NotFound,
    Login,
    // Settings,
    // Article,
    // ArticleDetail,
    // Dashboard,
    // Notification
}
