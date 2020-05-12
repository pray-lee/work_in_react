import React, {useState, useCallback} from 'react'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/AgGrid'

// rowData
let rowData = []
for(let i = 0; i < 500; i++) {
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
           headerName: '单据编号',
            field: 'a'
        },
        {
            headerName: '采购组织',
            field: 'b'
        },
        {
            headerName: '采购部门',
            field: 'c'
        },
        {
            headerName: '供应商',
            field: 'd'
        },
        {
            headerName: '发票类型',
            field: 'e'
        },
        {
            headerName: '采购类型',
            field: 'f'
        },
        {
            headerName: '预算类型',
            field: 'g'
        },
        {
            headerName: '核算维度',
            field: 'h'
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
            headerName: '未申请付款金额',
            field: 'k'
        },
        {
            headerName: '提交人',
            field: 'l'
        },
        {
            headerName: '提交日期',
            field: 'm'
        },
        {
            headerName: '单据状态',
            field: 'n'
        },
        {
            headerName: '业务日期',
            field: 'o'
        },
        {
            headerName: '凭证状态',
            field: 's'
        },
        {
            headerName: '备注',
            field: 'p'
        },
    ]
    // state
    const [agInstance, setAgInstance] = useState(null)
    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [])

    return (
        <>
            <OperatorButtons />
            <div style={{height: '60vh'}}>
                <Table
                    name="Yingfuguanli"
                    columns={columns}
                    rowData={rowData}
                    getAgInstance={getAgInstance}
                >
                </Table>
            </div>
        </>
    )
}
