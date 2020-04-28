import { combineReducers } from "redux";
import notifications from "./notifications";
import user from './user'
import routeConfig from './route'
export default combineReducers({
    notifications,
    user,
    routeConfig
})

