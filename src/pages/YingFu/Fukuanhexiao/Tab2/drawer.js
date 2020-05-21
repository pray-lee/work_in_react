import React, { useState, useCallback } from 'react'
import Table from '../../../../components/AgGrid'
import Drawer from "../../../../components/Drawer";
import {Button} from 'antd'

const columns = [
    {
        headerName: '',//选择列头部显示的文字，可以为空
        checkboxSelection: true,//设置为ture显示为复选框
        headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
        'pinned': 'left', //固定再左边
        width: 100 //列的宽度
    },
    {
        headerName: '付款单编号',
        field: 'a',
    },
    {
        headerName: '源单据编号',
        field: 'b'
    },
    {
        headerName: '源单据类型',
        field: 'c'
    },
    {
        headerName: '申请部门',
        field: 'd',
        colId: 'd'
    },
    {
        headerName: '往来单位类型',
        field: 'd',
    },
    {
        headerName: '往来单位',
        field: 'e'
    },
    {
        headerName: '本次核销金额',
        field: 'f'
    },
    {
        headerName: '未核销金额',
        field: 'g'
    },
    {
        headerName: '收款银行',
        field: 'h'
    },
    {
        headerName: '收款账号',
        field: 'i'
    },
    {
        headerName: '付款银行',
        field: 'j'
    },
    {
        headerName: '付款账号',
        field: 'k'
    },
    {
        headerName: '备注',
        field: 'k'
    },
    {
        headerName: '提交备注',
        field: 'k'
    },
]

export default React.memo(props => {
    //state
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [agInstance, setAgInstance] = useState(false)
    const setTableData = data => {
        setLoading(true)
        const t = setTimeout(() => {
            setData(data)
            setLoading(false)
            clearTimeout(t)
        }, 1000)
    }
    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    })
    return (
        <Drawer
            {...props}
        >
            <Button type="primary">核销</Button>
            <Table
                name="Fukuanhexiaotab2-drawer"
                columns={columns}
                rowData={data}
                loading={loading}
                getAgInstance={getAgInstance}
                setTableData={setTableData}
            />
        </Drawer>
    )
})
