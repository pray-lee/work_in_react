import React, {useState, useCallback} from "react";
import Table from '../../../components/AgGrid'
import OperatorButtons from "../../../components/OperatorButtons";

// rowData
const rowData = []
for(let i = 0; i < 5000; i++) {
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
    })
}

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
            headerName: '流水号',
            field: 'a'
        },
        {
            headerName: '收付组织',
            field: 'b'
        },
        {
            headerName: '单据编号',
            field: 'c'
        },
        {
            headerName: '银行简称',
            field: 'd'
        },
        {
            headerName: '提交人',
            field: 'e'
        },
        {
            headerName: '提交日期',
            field: 'f'
        },
        {
            headerName: '收入金额',
            field: 'g'
        },
        {
            headerName: '对方单位',
            field: 'h'
        },
        {
            headerName: '流水日期',
            field: 'i'
        },
        {
            headerName: '摘要',
            field: 'j'
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
            <div style={{height: '60vh'}}>
                <Table name="Shoukuanhexiao" columns={columns} rowData={rowData} getAgInstance={getAgInstance}/>
            </div>
        </>
    )
}
