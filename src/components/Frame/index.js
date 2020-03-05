import React from 'react'
import {Layout, Menu} from 'antd';
import { withRouter } from 'react-router-dom'
import '../../components/Frame/index.less'

const {Header, Content, Sider} = Layout

@withRouter
class Frame extends React.Component{
    handleMenuClick = ({key}) => {
        this.props.history.push(key)
    }
    render() {
        return (
            <Layout className="my-layout">
                <Header className="header">
                    <div className="logo"/>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        {/*左侧菜单*/}
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
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
                                            {item.title}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
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
