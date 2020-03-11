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
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd'
import {mainRoutes} from "./routes";

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider local={zhCN}>
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
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);

