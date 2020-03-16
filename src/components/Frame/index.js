import React, {Suspense} from 'react'
import {Spin, Layout, Menu, Dropdown, Avatar, Badge} from 'antd';
import {DownOutlined, UserOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {NotFound} from "../../pages";
import '../../components/Frame/index.less'
import Logo from './logo.jpg'
import {loginFailed} from "../../actions/user";
import {getRouteConfig} from "../../actions/route";

const {Header, Content, Sider} = Layout
const {SubMenu} = Menu

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
    // state = {
    //     openKeys: [this.props.routeConfig.navRoute.length && this.props.routeConfig.navRoute[0].pathname]
    // }

    componentDidMount() {
        // 请求菜单
        this.props.getRouteConfig()
    }

    handleMenuClick = ({key}) => {
        this.props.history.push(key)
    }
    handleTopMenuClick = ({key}) => {
        key === '/login' ?
            this.props.loginFailed() :
            this.props.history.push(key)
    }
    // 设置成方法就可以动态更新notifications了。如果是属性的话不可以
    setMenu = () => (
        <Menu onClick={this.handleTopMenuClick}>
            <Menu.Item key="/notification">
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
    // 点击当前菜单，关闭其他菜单
    // rootSubmenuKeys = () => {
    //     return this.props.routeConfig.navRoute.length && this.props.routeConfig.navRoute.map(item => {
    //         if (!!item.children && item.children.length) {
    //             return item.pathname
    //         }
    //     })
    // }
    // onOpenChange = openKeys => {
    //     const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    //     if (this.rootSubmenuKeys().indexOf(latestOpenKey) === -1) {
    //         this.setState({openKeys});
    //     } else {
    //         this.setState({
    //             openKeys: latestOpenKey ? [latestOpenKey] : [],
    //         });
    //     }
    // }

    // 递归渲染菜单
    createMenuListMap = (list) => {
        return !!list && list.map((item) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.pathname}
                        title={
                            <span>{item.title}</span>
                        }
                    >
                        {
                            // 根据当前菜单的 children 去生成其子菜单，由于菜单项 menuList 是个有终结的数据，且嵌套层数并不复杂，所以这里不用担心递归会造成栈溢出的问题
                            this.createMenuListMap(item.children)
                        }
                    </SubMenu>
                );
            } else {
                return (
                    <Menu.Item key={item.pathname}>
                        <span>{item.title}</span>
                    </Menu.Item>
                );
            }
        });
    }

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
                    <Sider width={200} className="site-layout-background">
                        {/*左侧菜单*/}
                        {
                            this.props.routeConfig.navRoute &&
                            <Menu
                                mode="vertical"
                                theme="dark"
                                selectedKeys={[this.props.location.pathname]}
                                // openKeys={this.state.openKeys}
                                // onOpenChange={this.onOpenChange}
                                onClick={this.handleMenuClick}
                            >

                                {this.createMenuListMap(this.props.routeConfig.navRoute)}
                            </Menu>
                        }

                    </Sider>
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
