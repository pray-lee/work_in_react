import React, {useState, useCallback} from 'react'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/AgGrid'

// rowData
let rowData = []
for(let i = 0; i < 10; i++) {
    rowData.push({
        a: Math.random(),
        b: Math.random(),
        c: Math.random(),
        d: Math.random(),
        e: Math.random(),
        f: Math.random(),
        g: Math.random(),
        h: Math.random(),
        i: Math.random(),
        j: Math.random(),
        k: Math.random(),
        l: Math.random(),
        m: Math.random(),
        n: Math.random(),
        o: Math.random(),
        p: Math.random(),
        s: Math.random(),
    })
}

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
    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [agInstance])

    return (
        <>
            <OperatorButtons />
            <div style={{height: '65vh'}}>
                <Table
                    name="Fukuanguanli"
                    columns={columns}
                    rowData={rowData}
                    getAgInstance={getAgInstance}
                    enablePagination={false}
                >
                </Table>
            </div>
        </>
    )
}
