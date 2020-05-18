import React, {useState, useCallback} from 'react'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/AgGrid'

export default () => {
    const columns = [
        {
            headerName: '',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            pinned: 'left',
            width: 100
        },
        {
           headerName: '付款单编号',
            field: 'a'
        },
        {
            headerName: '源单据编号',
            field: 'b'
        },
        {
            headerName: '申请组织',
            field: 'c'
        },
        {
            headerName: '申请部门',
            field: 'd'
        },
        {
            headerName: '往来单位类型',
            field: 'e'
        },
        {
            headerName: '往来单位',
            field: 'f'
        },
        {
            headerName: '收款银行',
            field: 'g'
        },
        {
            headerName: '收款账号',
            field: 'h'
        },
        {
            headerName: '付款银行',
            field: 'i'
        },
        {
            headerName: '付款账号',
            field: 'j'
        },
        {
            headerName: '申请金额',
            field: 'k'
        },
        {
            headerName: '提交金额',
            field: 'l'
        },
        {
            headerName: '业务日期',
            field: 'm'
        },
        {
            headerName: '申请日期',
            field: 'n'
        },
        {
            headerName: '付款提交日期',
            field: 'o'
        },
        {
            headerName: '付款确认日期',
            field: 's'
        },
        {
            headerName: '付款提交人',
            field: 'p'
        },
        {
            headerName: '申请人',
            field: 'p'
        },
        {
            headerName: '备注',
            field: 'p'
        },
        {
            headerName: '提交备注',
            field: 'p'
        },
        {
            headerName: '单据状态',
            field: 'p'
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
            <div style={{height: '65vh'}}>
                <Table
                    name="Fukuanguanli"
                    columns={columns}
                    rowData={data}
                    loading={loading}
                    setTableData={setTableData}
                    getAgInstance={getAgInstance}
                >
                </Table>
            </div>
        </>
    )
}
