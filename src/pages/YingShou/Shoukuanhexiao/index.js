import React, {useState, useEffect, useCallback} from "react";
import {Spin} from 'antd'
import Table from '../../../components/AgGrid'
import OperatorButtons from "../../../components/OperatorButtons";

// columns
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
        field: 'a',
        chartDataType: 'category'
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
export default () => {
    // state
    const [loading, setLoading] = useState(true)
    const [rowData, setRowData] = useState([])
    const [agInstance, setAgInstance] = useState(null)

    // 数据获取
    useEffect(() => {
        setTimeout(() => {
            const result = []
            for (let i = 0; i < 50000; i++) {
                result.push({
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
            setLoading(loading => loading = false)
            setRowData(data => [...result])
        }, 2000)
    }, []);


    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [])
    return (
        <>
           <Spin spinning={loading}>
               <OperatorButtons/>
               <div style={{height: '60vh'}}>
                   <Table name="Shoukuanhexiao" columns={columns} rowData={rowData} getAgInstance={getAgInstance}/>
               </div>
           </Spin>
        </>
    )
}

