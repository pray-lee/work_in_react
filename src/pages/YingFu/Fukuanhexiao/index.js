import React, {useState} from 'react'
import {Tabs, Menu, Dropdown, message} from 'antd'
import {
    CheckOutlined,
    SearchOutlined,
    DownOutlined
} from '@ant-design/icons'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

// tabs
const {TabPane} = Tabs
export default () => {
    // 下拉菜单设置一个key
    const [key, setKey] = useState(0)

    // 点击切换
    const onClick = ({key}) => {
        setKey(key)
    }
    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="0">
                已核销付款单明细
            </Menu.Item>
            <Menu.Item key="1">
                单独凭证处理明细
            </Menu.Item>
        </Menu>
    )


    return (
        <>
            <Tabs defaultActiveKey="1" size="small" animated={false}>
                <TabPane
                    tab={
                        <span>
                            <CheckOutlined/>
                            精准
                        </span>
                    }
                    key="1"
                >
                    <Tab1></Tab1>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <SearchOutlined/>
                            全量
                        </span>
                    }
                    key="2">
                    <Tab2/>
                </TabPane>
                <TabPane
                    tab={
                        <span>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    反核销 <DownOutlined/>
                </a>
            </Dropdown>
                        </span>
                    }
                    key="3">
                    <Tab3 tab={key}/>
                </TabPane>
            </Tabs>
        </>
    )
}
