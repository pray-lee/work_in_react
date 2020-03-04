import LoadableComponent from "../react_loadable_by_self";
import {
    Loading
} from "../components";
// 普通方式
// import NotFound from "./NotFound";
// import Login from "./Login";

// 路由懒加载方式
const NotFound = LoadableComponent({
    loader: () => import('./NotFound'),
    loading: Loading
})

const Login = LoadableComponent({
    loader: () => import('./Login'),
    loading: Loading
})

export {
    NotFound,
    Login
}
