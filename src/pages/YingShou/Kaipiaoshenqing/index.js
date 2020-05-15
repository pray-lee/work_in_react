import React, {useState, useCallback} from 'react'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from "../../../components/AgGrid";

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
            headerName: '提交人',
            field: 'l'
        },
        {
            headerName: '提交日期',
            field: 'm'
        },
        {
            headerName: '收件人',
            field: 'f'
        },
        {
            headerName: '电话',
            field: 'g'
        },
        {
            headerName: '地址',
            field: 'h'
        },
        {
            headerName: '单据状态',
            field: 'n'
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
    // state
    const [agInstance, setAgInstance] = useState(null)

    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [])
    return (
        <>
            <OperatorButtons />
            <Table
                name="Kaipiaoshenqing"
                columns={columns}
                getAgInstance={getAgInstance}
            />
        </>
    )
}
