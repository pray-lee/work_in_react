import React, {useCallback, useState} from 'react'
import OperatorButtons from "../../../../components/OperatorButtons";
import Table from '../../../../components/AgGrid'
import Drawer from "../../../../components/Drawer";
import {Tabs} from 'antd'

const {TabPane} = Tabs

//columns
const columns = [
    {
        headerName: '',//选择列头部显示的文字，可以为空
        checkboxSelection: true,//设置为ture显示为复选框
        headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
        'pinned': 'left', //固定再左边
        width: 100 //列的宽度
    },
    {
        headerName: '付款单编号',
        field: 'a',
    },
    {
        headerName: '源单据编号',
        field: 'b'
    },
    {
        headerName: '源单据类型',
        field: 'c'
    },
    {
        headerName: '申请组织',
        field: 'd',
        colId: 'd'
    },
    {
        headerName: '申请部门',
        field: 'd',
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
        headerName: '核销金额',
        field: 'k'
    },
    {
        headerName: '业务日期',
        field: 'k'
    },
    {
        headerName: '申请日期',
        field: 'k'
    },
    {
        headerName: '付款提交人',
        field: 'k'
    },
    {
        headerName: '申请人',
        field: 'k'
    },
    {
        headerName: '核销时间',
        field: 'k'
    },
    {
        headerName: '操作',
        cellRenderer: 'actionRenderer'
    }
]
const action = params => {
    return <a href="javascript:void(0)">凭证</a>
}
export default () => {
    const [agInstance, setAgInstance] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const getAgInstance = useCallback(instance => {
        setAgInstance(instance)
    }, [])
    // 设置数据
    const setTableData = data => {
        setLoading(true)
        const t = setTimeout(() => {
            setLoading(false)
            setData([{a: Math.random()}])
            clearTimeout(t)
        }, 2000)
    }
    // 双击打开抽屉
    const onRowDoubleClickCallback = useCallback(() => {
        setVisible(true)
    })
    const onClose = useCallback(() => {
        setVisible(false)
    }, [])
    return (
        <>
            <OperatorButtons/>
            <Table
                name="已核销付款单明细"
                columns={columns}
                rowData={data}
                setTableData={setTableData}
                getAgInstance={getAgInstance}
                loading={loading}
                onRowDoubleClick={onRowDoubleClickCallback}
                action={action}
            >
            </Table>
            <Drawer
                visible={visible}
                hasFooter={false}
                onClose={onClose}
            >
               <Tabs defaultActiveKey="1" size="small" animated={false}>
                   <TabPane
                    tab={
                        <span>
                           付款详情
                        </span>
                    }
                    key="1"
                   >
                       <div>付款详情</div>
                   </TabPane>
                   <TabPane
                       tab={
                           <span>
                           核销银行流水
                        </span>
                       }
                       key="2"
                   >
                       <div>核销银行流水</div>
                   </TabPane>
               </Tabs>
            </Drawer>
        </>
    )
}

