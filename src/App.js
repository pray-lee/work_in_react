import React from 'react';
import {Spin} from 'antd';
import {Redirect} from 'react-router-dom'
import {Frame} from './components'
import {connect} from 'react-redux'

const mapState = state => {
    return {
        user: state.user,
        routeConfig: state.routeConfig
    }
}

@connect(mapState)
class App extends React.Component {
    render() {
        return (
            this.props.user.isLogin
                ?
                <Spin spinning={!this.props.routeConfig.navRoute.length} size="large">
                    <Frame></Frame>
                </Spin>
                :
                <Redirect to="/login" />
        );
    }

}

export default App;
