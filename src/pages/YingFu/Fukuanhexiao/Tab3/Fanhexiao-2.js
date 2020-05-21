import React, {useCallback, useState} from 'react'
import OperatorButtons from "../../../../components/OperatorButtons";
import Table from '../../../../components/AgGrid'

//columns
const columns = [
    {
        headerName: '',//选择列头部显示的文字，可以为空
        checkboxSelection: true,//设置为ture显示为复选框
        headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
        'pinned': 'left', //固定再左边
        width: 100 //列的宽度
    },
    {
        headerName: '单据编号',
        field: 'a',
    },
    {
        headerName: '银行流水编号',
        field: 'b'
    },
    {
        headerName: '收付组织',
        field: 'c'
    },
    {
        headerName: '支出金额',
        field: 'd',
        colId: 'd'
    },
    {
        headerName: '对方单位',
        field: 'd',
    },
    {
        headerName: '对方账号',
        field: 'e'
    },
    {
        headerName: '业务发生时间',
        field: 'f'
    },
    {
        headerName: '摘要',
        field: 'g'
    },
    {
        headerName: '核销日期',
        field: 'h'
    },
    {
        headerName: '操作',
        cellRenderer: 'actionRenderer'
    }
]
const action = params => {
    return <a href="javascript:void(0)">反核销</a>
}
export default () => {
    const [agInstance, setAgInstance] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [])
    // 设置数据
    const setTableData = data => {
        setLoading(true)
        const t = setTimeout(() => {
            setLoading(false)
            setData([{a: Math.random()}])
            clearTimeout(t)
        }, 2000)
    }
    // 双击打开抽屉
    const onRowDoubleClickCallback = useCallback(() => {
        setVisible(true)
    })
    const onClose = useCallback(() => {
        setVisible(false)
    }, [])
    return (
        <>
            <OperatorButtons/>
            <Table
                name="单独凭证处理明细"
                columns={columns}
                rowData={data}
                setTableData={setTableData}
                getAgInstance={getAgInstance}
                loading={loading}
                onRowDoubleClick={onRowDoubleClickCallback}
                action={action}
            >
            </Table>
        </>
    )
}

