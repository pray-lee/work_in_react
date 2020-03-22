import React, {Suspense} from 'react'
import {Layout, Menu, Dropdown, Avatar, Badge} from 'antd';
import {DownOutlined, UserOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {NotFound} from "../../pages";
import '../../components/Frame/index.less'
import Logo from './logo.jpg'
import {loginFailed} from "../../actions/user";
import {getRouteConfig} from "../../actions/route";
import LeftNav from "../LeftNav";

const {Header, Content, Sider} = Layout

const mapState = state => {
    return {
        notificationsCount: state.notifications.list.filter(item => !item.hasRead).length,
        userInfo: state.user,
        routeConfig: state.routeConfig
    }
}

@connect(mapState, {loginFailed, getRouteConfig})
@withRouter
class Frame extends React.Component {
    state = {
        collapsed: false
    }
    componentDidMount() {
        // 请求菜单
        this.props.getRouteConfig()
    }
    handleTopMenuClick = ({key}) => {
        key === '/login' ?
            this.props.loginFailed() :
            this.props.history.push(key)
    }
    // 设置成方法就可以动态更新notifications了。如果是属性的话不可以
    setMenu = () => (
        <Menu onClick={this.handleTopMenuClick}>
            <Menu.Item key="/messageManager/Notification">
                <Badge dot={Boolean(this.props.notificationsCount)}>
                    通知中心
                </Badge>
            </Menu.Item>
            <Menu.Item key="/settings">
                个人设置
            </Menu.Item>
            <Menu.Item key="/login">
                退出登陆
            </Menu.Item>
        </Menu>
    )

    render() {
        return (
            <Layout className="my-layout">
                <Header className="header ck-header">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <Dropdown overlay={this.setMenu()}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="!#">
                            <Avatar style={{backgroundColor: '#87d068', margin: '0 10px'}} icon={<UserOutlined/>}/>
                            <span>欢迎您！</span>
                            <Badge count={this.props.notificationsCount} overflowCount={10} offset={[8, -8]}>
                                <span>{this.props.userInfo.username}</span>
                            </Badge>
                            <DownOutlined/>
                        </a>
                    </Dropdown>
                </Header>
                <Layout>
                    {/*<Sider*/}
                    <LeftNav {...this.props}/>
                    {/*</Sider>*/}
                    <Layout style={{margin: '15px'}}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: '#fff'
                            }}
                        >
                            <Switch>
                                {!!this.props.routeConfig.pageRoute.length
                                && this.props.routeConfig.pageRoute.map(item => {
                                    return (<Route
                                        path={item.pathname}
                                        key={item.pathname}
                                        render={routeProps => (
                                            <Suspense fallback={<div>loading...</div>}>
                                                <item.component/>
                                            </Suspense>)}
                                    >
                                    </Route>)
                                })
                                }
                                {/*404*/}
                                <Redirect to="/dashboard/Dashboard" from="/" exact/>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }

}

export default Frame
