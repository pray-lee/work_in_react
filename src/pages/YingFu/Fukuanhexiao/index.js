import React from 'react'
import {Tabs} from 'antd'
import {
    CheckOutlined,
    SearchOutlined,
    RollbackOutlined
} from '@ant-design/icons'
import Tab1 from './Tab1'
// import Tab2 from './Tab2'
// import Tab3 from './Tab3'

// tabs
const {TabPane} = Tabs

export default () => {
    const callback = key => console.log(key)
    return (
        <>
            <Tabs defaultActiveKey="1" onChange={callback} size="small" animated={false}>
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
                    content2
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <RollbackOutlined/>
                            反核销
                        </span>
                    }
                    key="3">
                    content3
                </TabPane>
            </Tabs>
        </>
    )
}
