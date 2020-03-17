import actionType from "./actionType";

export const getRouteConfig = () => {
    return dispatch => {
       setTimeout(() => {
           const routeConfig = [
               {
                   title: '我的单据',
                   pathname: '/dashboard',
                   children: [
                       {
                           title: '我的应收',
                           pathname: '/dashboard/Dashboard',
                       },
                       {
                           title: '我的开票申请',
                           pathname: '/dashboard/Article',
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
               {
                   title: '消息管理',
                   pathname: '/messageManager',
                   component: 'MessageManager',
                   children: [
                       {
                           title: '通知中心',
                           pathname: '/messageManager/Notification'
                       }
                   ]
               }
           ]
          dispatch({
              type: actionType.GET_ROUTE_CONFIG,
              payload: {
                  routeConfig
              }
          })
       }, 1000)
    }
}