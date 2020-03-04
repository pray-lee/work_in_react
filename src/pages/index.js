// 这个是简易的loadable
import Loadable from "../react_loadable_by_self";

// 这个是官方的
// import Loadable from 'react-loadable'

import {
    Loading
} from "../components";
// 普通方式
// import NotFound from "./NotFound";
// import Login from "./Login";

// 路由懒加载方式
const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading
})

const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading
})

export {
    NotFound,
    Login
}
