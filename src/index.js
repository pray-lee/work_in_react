import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import App from './App';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
// 设置中文
import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import {mainRoutes} from "./routes";

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <Router>
                <Switch>
                    {
                        mainRoutes.map(item => {
                            return (
                                <Route key={item.pathname} component={item.component} path={item.pathname}></Route>
                            )
                        })
                    }
                    <Route path="/" component={App}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        </Provider>
    </ConfigProvider>,
document.getElementById('root')
)
;

