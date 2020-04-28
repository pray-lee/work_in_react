import React, {useState, useCallback, useEffect} from 'react'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/AgGrid'
import { Pagination } from 'antd'

// rowData
let rowData = []
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
        k: Math.random(),
        l: Math.random(),
        m: Math.random(),
        n: Math.random(),
        o: Math.random(),
        p: Math.random(),
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
    const [currentPage, setCurrentPage] = useState(1)
    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [agInstance, currentPage])

    // 设置页数
    const setCurrentPageFn = page => {
        setCurrentPage(page)
        rowData = []
        rowData.push({
            a: Math.floor(Math.random() * (10, 100)),
            b: Math.floor(Math.random() * (10, 100)),
            c: Math.floor(Math.random() * (10, 100)),
            d: Math.floor(Math.random() * (10, 100)),
            e: Math.floor(Math.random() * (10, 100)),
            f: Math.floor(Math.random() * (10, 100)),
            g: Math.floor(Math.random() * (10, 100)),
            h: Math.floor(Math.random() * (10, 100)),
            i: Math.floor(Math.random() * (10, 100)),
            j: Math.floor(Math.random() * (10, 100)),
            k: Math.floor(Math.random() * (10, 100)),
            l: Math.floor(Math.random() * (10, 100)),
            m: Math.floor(Math.random() * (10, 100)),
            n: Math.floor(Math.random() * (10, 100)),
            o: Math.floor(Math.random() * (10, 100)),
            p: Math.floor(Math.random() * (10, 100)),
        })

    }
    return (
        <>
            <OperatorButtons />
            <div style={{height: '60vh'}}>
                <Table name="Yingshouguanli" columns={columns} rowData={rowData} getAgInstance={getAgInstance}></Table>
            </div>
            <Pagination current={currentPage} onChange={setCurrentPageFn} total={50}/>
        </>
    )
}
