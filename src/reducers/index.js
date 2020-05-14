import { combineReducers } from "redux";
import notifications from "./notifications";
import user from './user'
import routeConfig from './route'
import tableData from './tableData'
export default combineReducers({
    notifications,
    user,
    routeConfig,
    tableData
})

