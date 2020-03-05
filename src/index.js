import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { mainRoutes } from "./routes";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/admin" render={routeProps=>{
                // 做登录权限控制
                return <App {...routeProps}/>
            }} />
            {
                mainRoutes.map(item => {
                    return (
                        <Route key={item.pathname} component={item.component} path={item.pathname}></Route>
                    )
                })
            }
            <Redirect to="/admin" from="/" exact />
            <Redirect to="/404" />
        </Switch>
    </Router>,
    document.getElementById('root')
);

