import actionType from "../actions/actionType";
import {adminRoutes} from "../routes";

const initialRoute = {
    navRoute: [],
    pageRoute: []
}

export default (state=initialRoute, action) => {
    switch (action.type){
        case actionType.GET_ROUTE_CONFIG:
            // 这里手动增加不是导航点击的路由, 复制一份路由给路由视图用
            const routeConfig = action.payload.routeConfig.slice()
            // reset password
            routeConfig.push({
                pathname: '/ResetPassword',
            })
            // notification
            routeConfig.push({
                pathname: '/Notification',
            })
            return {
                navRoute: action.payload.routeConfig,
                pageRoute: adminRoutes(routeConfig)
            }
        default:
            return state
    }
}