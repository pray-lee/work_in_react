import actionType from "../actions/actionType";
import {adminRoutes} from "../routes";

const initialRoute = {
    navRoute: [],
    pageRoute: []
}

export default (state=initialRoute, action) => {
    switch (action.type){
        case actionType.GET_ROUTE_CONFIG:
            return {
                navRoute: action.payload.routeConfig,
                pageRoute: adminRoutes(action.payload.routeConfig)
            }
        default:
            return state
    }
}