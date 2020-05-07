import React, {useState, useCallback} from 'react'
import OperatorButtons from "../../../components/OperatorButtons";
import PaginationTable from '../../../components/PaginationAgGrid'

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
            <div style={{height: '65vh'}}>
                <PaginationTable
                    name="Yingshouguanli"
                    columns={columns}
                    rowData={rowData}
                    getAgInstance={getAgInstance}
                    total="1000"
                    setCurrentPageFn={setCurrentPageFn}
                    currentPage={currentPage}
                >
                </PaginationTable>
            </div>
        </>
    )
}
