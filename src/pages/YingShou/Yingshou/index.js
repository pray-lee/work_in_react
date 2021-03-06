import React, {useState, useCallback} from 'react'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/AgGrid'

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
            field: 'a',
            // cellClassRules: {
            //    'warning': function(params) {
            //        return params.value > 0.5
            //    }
            // }
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
            headerName: '销售类型',
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
            headerName: '未核销金额',
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
            headerName: '备注',
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
            <div style={{height: '60vh'}}>
                <Table name="Yingshouguanli" columns={columns} rowData={data} getAgInstance={getAgInstance} loading={loading} setTableData={setTableData}></Table>
            </div>
        </>
    )
}
