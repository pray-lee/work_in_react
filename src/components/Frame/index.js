import React from 'react'
import {Layout, Menu, Dropdown, Avatar, Badge} from 'antd';
import {DownOutlined, UserOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import '../../components/Frame/index.less'
import Logo from './logo.jpg'
import {loginFailed} from "../../actions/user";

const {Header, Content, Sider} = Layout

const mapState = state => {
    return {
        notificationsCount: state.notifications.list.filter(item => !item.hasRead).length,
        userInfo: state.user
    }
}

@connect(mapState, {loginFailed})
@withRouter
class Frame extends React.Component {
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
                        <Menu
                            mode="inline"
                            // 默认进来选中哪一个
                            defaultSelectedKeys={[this.props.location.pathname]}
                            // 选完之后选中哪一个
                            selectedKeys={[this.props.location.pathname]}
                            style={{height: '100%', borderRight: 0}}
                            theme="dark"
                            onClick={this.handleMenuClick}
                        >
                            {
                                this.props.adminRoutes.map(item => {
                                    return (
                                        <Menu.Item
                                            key={item.pathname}

                                        >
                                            <item.icon/>
                                            <span>{item.title}</span>

                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
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
                            {/*写路由的地方*/}
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }

}

export default Frame
