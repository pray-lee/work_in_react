import React from 'react'
import {
    Button
} from 'antd'
import {
    PlusCircleOutlined,
    EditOutlined
} from '@ant-design/icons'
import {
    antBtnSm
} from './index.module.scss'
import classNames from 'classnames'
import Table from '../../../components/AgGrid'

// 表头
const columns = [
    {
        headerName: '菜单顺序',
        field: 'order',
    },
    {
        headerName: '菜单名称',
        field: 'name',
        rowGroup: true,
        hide: true
    },
    {
        headerName: '子菜单',
        field: 'alias',
        // hide: true
    },
    {
        headerName: '菜单图标',
        field: 'icon',
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

const autoGroupColumnDef = {
    headerName: '我的菜单分组名称',
    minWidth: 200,
    field: 'alias',
    cellRendererParams: {
        suppressCount: true,
    }
}

// action
const action = params => {
    const handleClick = () => {
        console.log(params)
    }
    return (
        <>
            <Button onClick={handleClick}>删除</Button>
            <Button>页面控件权限</Button>
            <Button>数据规则</Button>
        </>
    )
}

// rowData
const rowData = []
for (var i = 0; i < 100; i++) {
    rowData.push({
        order: i,
        name: `我的应收`,
        alias: `我的应收${i}`,
        address: 'address' + i,
        style: 'style' + i,
        icon: 'icon' + i
    })
}
console.log(rowData)

export default props => {
    return (
        <>
            <div className="menu-control">
                <Button className={classNames(antBtnSm)} type="primary" size="small"
                        icon={<PlusCircleOutlined style={{fontSize: '12px'}}/>}>菜单录入</Button>
                <Button className={classNames(antBtnSm)} type="primary" size="small"
                        icon={<EditOutlined style={{fontSize: '12px'}}/>}>菜单编辑</Button>
                {/*菜单表格*/}
            </div>
            <Table
                name="menu"
                columns={columns}
                rowData={rowData}
                action={action}
                autoGroupColumnDef={autoGroupColumnDef}
            ></Table>
        </>
    )
}
