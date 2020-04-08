import actionType from "./actionType";

export const getRouteConfig = () => {
    return dispatch => {
       setTimeout(() => {
           const routeConfig = [
               {
                   title: '我的单据',
                   pathname: '/DanJu',
                   children: [
                       {
                           title: '我的应收',
                           pathname: '/DanJu/Yingshou',
                       },
                       {
                           title: '我的开票申请',
                           pathname: '/DanJu/Kaipiao',
                       }
                   ]
               },
               {
                   title: '财务管理',
                   pathname: '/caiwuguanli',
                   children: [
                       {
                           title: '凭证管理',
                           pathname: '/caiwuguanli/Settings',
                       },
                       {
                           title: '我的开票申请',
                           pathname: '/caiwuguanli/Article',
                       }
                   ]
               },
           ]
          dispatch({
              type: actionType.GET_ROUTE_CONFIG,
              payload: {
                  routeConfig
              }
          })
       }, 200)
    }
}