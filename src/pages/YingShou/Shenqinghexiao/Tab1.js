import React, {useState, useCallback} from 'react'
import {Button} from 'antd'
import Table from '../../../components/AgGrid'
import OperatorButtons from "../../../components/OperatorButtons";
import Drawer from '../../../components/Drawer'
import {connect} from "react-redux";
import {tableLoadingStart, tableLoadingEnd} from "../../../actions/tableData";

const columnsTab = [
    {
        headerName: '',
        checkboxSelection: true,
        headerCheckboxSelection: true,
        'pinned': 'left',
        width: 100
    },
    {
        headerName: 'a',
        field: 'a'
    },
    {
        headerName: 'b',
        field: 'bb'
    },
    {
        headerName: 'c',
        field: 'c'
    },
    {
        headerName: 'd',
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

const Tab1 = React.memo(props => {
    // state
    const [agInstance, setAgInstance] = useState(null)
    const [tagAgInstance, setTagAgInstance] = useState(null)
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    // rowData
    const [rowData, setRowData] = useState([{a: Math.random()}])
    const [tabRowData, setTabRowData] = useState([{a: Math.random()}])
    // 关闭drawer
    const onClose = useCallback(() => {
        setVisible(false)
    }, [])

    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [])

    const getTabAgInstance = useCallback(instance => {
        setTagAgInstance(instance)
    }, [])

    // doubleClick show drawer
    const onRowDoubleClickCallback = useCallback((agEvent) => {
        console.log(agEvent)
        setVisible(true)
    }, [])

    // row data test
    const requestRowData = setData => {
        console.log('request row data')
    }
    const requestTabRowData = setData => {
        console.log('request tab row data')
        setTabRowData([{a: Math.random()}])
    }

    return (
        <>
            <OperatorButtons />
            <Table
                name="Shenqinghexiao"
                columns={columns}
                getAgInstance={getAgInstance}
                onRowDoubleClick={onRowDoubleClickCallback}
                rowData={rowData}
                getData={requestRowData}
            />
            <Drawer width={"65vw"} title="待核销明细" hasFooter={false} onClose={onClose} visible={visible}>
                <Button type="primary">核销</Button>
                <Table
                    name="ShenqinghexiaoTab"
                    columns={columnsTab}
                    getAgInstance={getTabAgInstance}
                    rowData={tabRowData}
                    getData={requestTabRowData}
                />
            </Drawer>
        </>
    )
})

const mapState = state => {
    return {
        tableData: state.tableData
    }
}

export default connect(mapState, {tableLoadingStart, tableLoadingEnd})(Tab1)
