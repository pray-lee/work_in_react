import React from 'react'
import {
    Button
} from 'antd'
import {
    PlusCircleOutlined,
    EditOutlined
} from '@ant-design/icons'
import './index.less'

import Table from '../../../components/AgGrid'

export default props => {
    return (
        // 菜单
        <div className="menu-control">
            <Button style={{marginRight: '10px'}} type="primary" size="small" icon={<PlusCircleOutlined style={{fontSize: '12px'}} />}>菜单录入</Button>
            <Button type="primary" size="small" icon={<EditOutlined style={{fontSize: '12px'}} />}>菜单编辑</Button>
        {/*菜单表格*/}
        <Table
            name="menu"

        ></Table>
        </div>
    )
}
