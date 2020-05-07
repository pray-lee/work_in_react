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
                       },
                       {
                           title: '我的应付',
                           pathname: '/DanJu/Yingfu'
                       },
                       {
                           title: '我的付款申请',
                           pathname: '/DanJu/FuKuanShenQing'
                       },
                       {
                           title: '我的借款',
                           pathname: '/DanJu/JieKuan'
                       },
                       {
                           title: '我的报销单',
                           pathname: '/DanJu/BaoXiaoDan'
                       }
                   ]
               },
               {
                   title: '应收管理',
                   pathname: '/YingShou',
                   children: [
                       {
                           title: '应收管理',
                           pathname: '/YingShou/Yingshou',
                       },
                       {
                           title: '开票申请管理',
                           pathname: '/YingShou/Kaipiaoshenqing',
                       },
                       {
                           title: '开票申请核销',
                           pathname: '/YingShou/Shenqinghexiao',
                       },
                       {
                           title: '收款核销',
                           pathname: '/YingShou/Shoukuanhexiao',
                       },
                       {
                           title: '开票管理',
                           pathname: '/YingShou/Kaipiaoguanli',
                       },
                   ]
               },
               {
                   title: '应付管理',
                   pathname: '/YingFu',
                   children: [
                       {
                           title: '应付管理',
                           pathname: '/YingFu/Yingfuguanli',
                       },
                       {
                           title: '付款管理',
                           pathname: '/YingFu/Fukuanguanli',
                       },
                       {
                           title: '付款核销',
                           pathname: '/YingFu/Fukuanhexiao',
                       },
                       {
                           title: '采购发票管理',
                           pathname: '/YingFu/Caigoufapiaoguanli',
                       },
                       {
                           title: '采购发票核销',
                           pathname: '/YingFu/Caigoufapiaohexiao',
                       },
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
