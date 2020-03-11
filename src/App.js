import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {adminRoutes} from './routes'
import {Frame} from './components'
import {connect} from 'react-redux'

// 处理导航路由
const navRoutes = adminRoutes.filter(item => item.isNav === true)

const mapState = state => {
    return {
        user: state.user
    }
}

@connect(mapState)
class App extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            this.props.user.isLogin
                ?
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
                        <Redirect to={adminRoutes[0].pathname} from="/" exact/>
                        <Redirect to="/notFound"/>
                    </Switch>
                </Frame>
                :
                <Redirect to="/login" />
        );
    }

}

export default App;
