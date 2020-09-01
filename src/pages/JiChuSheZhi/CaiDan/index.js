import React from 'react'
import {
    Button
} from 'antd'
import {
    PlusCircleOutlined,
    EditOutlined
} from '@ant-design/icons'
import styles from './index.module.css'
import classNames from 'classnames'
import Table from '../../../components/AgGrid'

// 表头
const columns = [
    {
        headerName: '菜单顺序',
        field: 'order'
    },
    {
        headerName: '菜单名称',
        field: 'name'
    },
    {
        headerName: '菜单图标',
        field: 'icon'
    },
    {
        headerName: '菜单地址',
        field: 'address'
    },
    {
        headerName: '菜单图标样式',
        field: 'style'
    },
    {
        headerName: '操作',
        cellRenderer: 'actionRenderer'
    }
]

// action
const action = params => {
    const handleClick = () => {
        console.log(params)
    }
    return (
        <>
            <Button onClick={handleClick}>abc</Button>
            <Button>edf</Button>
            <Button>xoo</Button>
        </>
    )
}

// rowData
const rowData = []
for (let i = 0; i < 10; i++) {
    rowData.push({
        order: i++,
        name: i++,
        address: i++
    })
}

export default props => {
    return (
        // 菜单
        <div className="menu-control">
            <Button className={classNames(styles.antBtnSm)} type="primary" size="small"
                    icon={<PlusCircleOutlined style={{fontSize: '12px'}}/>}>菜单录入</Button>
            <Button className={classNames(styles.antBtnSm)} type="primary" size="small"
                    icon={<EditOutlined style={{fontSize: '12px'}}/>}>菜单编辑</Button>
            {/*菜单表格*/}
            <Table
                name="menu"
                columns={columns}
                rowData={rowData}
                action={action}
            ></Table>
        </div>
    )
}
