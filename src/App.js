import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import { adminRoutes } from './routes'
import {Frame} from './components'

// 处理导航路由
const navRoutes = adminRoutes.filter(item => item.isNav === true)

class App extends React.Component {
    render() {
        return (
            <Frame adminRoutes={navRoutes}>
                <Switch>
                    {
                        adminRoutes.map(item => {
                            return <Route
                                exact={item.exact}
                                key={item.pathname}
                                path={item.pathname}
                                component={item.component}
                            />
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from="/admin" exact/>
                    <Redirect to="/admin/404"/>
                </Switch>
            </Frame>
        );
    }

}

export default App;
