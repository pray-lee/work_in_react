import React, {useState, useCallback} from 'react'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/AgGrid'

// rowData
const rowData = []
for(var i = 0; i < 100; i++) {
    rowData.push({
        a: Math.random(),
        b: Math.random(),
        c: Math.random(),
        d: Math.random(),
        e: Math.random(),
        g: Math.random(),
        h: Math.random(),
        i: Math.random(),
        j: Math.random(),
        k: Math.random(),
        m: Math.random(),
        o: Math.random(),
        p: Math.random(),
    })
}

export default () => {
    const columns = [ { headerName: '',
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
            headerName: '销售类型',
            field: 'm'
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
            headerName: '含税销售金额',
            field: 'j'
        },
        {
            headerName: '待核销金额',
            field: 'k'
        },
        {
            headerName: '业务日期',
            field: 'a'
        },
        {
            headerName: '备注',
            field: 'a'
        },
    ]
    const [agInstance, setAgInstance] = useState(null)
    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [])
    return (
        <>
            <OperatorButtons/>
            <div style={{height: "80vh"}}>
                <Table name="Shenqinghexiao" columns={columns} rowData={rowData} getAgInstance={getAgInstance}></Table>
            </div>
        </>
    )
}
