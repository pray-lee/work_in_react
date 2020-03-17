import React, {useState} from 'react'
import {Layout, Menu} from 'antd'
import {UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
const { Sider } = Layout
const { SubMenu } = Menu

const LeftNav = props => {
    const [collapsed, setCollapsed] = useState(false)
    const [openKey, setOpenKey] = useState(['/' + props.location.pathname.slice(1).split('/').shift()])
    const handleCollapsed = collapsed => {
        setCollapsed(collapsed)
    }
    const handleMenuClick = ({key}) => {
        props.history.push(key)
    }

    // 点击当前菜单，关闭其他菜单
    const rootSubmenuKeys = () => {
        return props.routeConfig.navRoute.length && props.routeConfig.navRoute.map(item => {
            if (!!item.children && item.children.length) {
                return item.pathname
            }
        })
    }
    const openChange = openKeys => {
        const latestOpenKey = openKeys.find(key => openKey.indexOf(key) === -1);
        if (rootSubmenuKeys().indexOf(latestOpenKey) === -1) {
            setOpenKey(openKeys)
        } else {
            const newOpenKeys = latestOpenKey ? [latestOpenKey] : []
            setOpenKey(newOpenKeys)
        }
    }

    // 递归渲染菜单
    const createMenuListMap = list => {
        return !!list && list.map((item) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.pathname}
                        title={
                            <span>
                                 <UserOutlined />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            // 根据当前菜单的 children 去生成其子菜单，由于菜单项 menuList 是个有终结的数据，且嵌套层数并不复杂，所以这里不用担心递归会造成栈溢出的问题
                            createMenuListMap(item.children)
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

    return (
        <Sider
            width={200}
            className="site-layout-background"
            collapsible
            collapsed={collapsed}
            onCollapse={handleCollapsed}
            trigger={collapsed ?  <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        >
            {/*左侧菜单*/}
            {
                props.routeConfig.navRoute &&
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={[props.location.pathname]}
                    defaultOpenKeys={openKey}
                    openKeys={openKey}
                    onOpenChange={openChange}
                    onClick={handleMenuClick}
                >

                    {createMenuListMap(props.routeConfig.navRoute)}
                </Menu>
            }

        </Sider>
    )
}
export default LeftNav