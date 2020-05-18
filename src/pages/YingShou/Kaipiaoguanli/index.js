import React, {useState, useCallback} from 'react'
import Table from '../../../components/AgGrid'
import OperatorButtons from "../../../components/OperatorButtons";

export default () => {
    const columns = [
        {
            headerName: '',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            'pinned': 'left',
            width: 100
        },
        {
            headerName: '单据编号',
            field: 'a'
        },
        {
            headerName: '销售组织',
            field: 'b'
        },
        {
            headerName: '销售部门',
            field: 'c'
        },
        {
            headerName: '客户名称',
            field: 'd'
        },
        {
            headerName: '发票类型',
            field: 'e'
        },
        {
            headerName: '税率（%）',
            field: 'i'
        },
        {
            headerName: '价税合计',
            field: 'j'
        },
        {
            headerName: '未开票金额',
            field: 'k'
        },
        {
            headerName: '未核销应收金额',
            field: 'p'
        },
        {
            headerName: '单据状态',
            field: 'n'
        },
        {
            headerName: '提交日期',
            field: 'm'
        },
        {
            headerName: '业务日期',
            field: 'o'
        },
        {
            headerName: '收件人',
            field: 'l'
        },
        {
            headerName: '地址',
            field: 'g'
        },
        {
            headerName: '电话',
            field: 'h'
        },
    ]
    // state
    const [agInstance, setAgInstance] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [])

    // 设置数据
    const setTableData = data => {
        setLoading(true)
        const t = setTimeout(() => {
            setLoading(false)
            setData(data)
            clearTimeout(t)
        }, 2000)
    }

    return (
        <>
            <OperatorButtons />
            <Table
                name="Yingshouguanli"
                columns={columns}
                rowData={data}
                loading={loading}
                setTableData={setTableData}
                getAgInstance={getAgInstance}
            />
        </>
    )
}
