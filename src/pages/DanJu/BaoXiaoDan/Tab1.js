import React from 'react'
import {Button} from 'antd'
import Table from '../../../components/AgGrid'

export default class Tab1 extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
        columns: [
            {
                headerName: '',//选择列头部显示的文字，可以为空
                checkboxSelection: true,//设置为ture显示为复选框
                headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
                'pinned': 'left', //固定再左边
                width: 80 //列的宽度
            },
            {
                headerName: '费用类型',
                field: 'name',
            },
            {
                headerName: '核算维度',
                field: 'num',
            },
            {
                headerName: '预算类型',
                field: 'price',
            },
            {
                headerName: '预算维度',
                field: 'priceTotal',
            },
            {
                headerName: '附加信息',
                field: 'contract',
            },
            {
                headerName: '申请报销金额',
                field: 'bx',
            },
            {
                headerName: '发票类型',
                field: 'invoiceType',
            },
            {
                headerName: '税率',
                field: 'shuilv',
            },
            {
                headerName: '备注',
                field: 'remark',
            },
        ],
        rowData: [],
        agInstance: null
    }
    // ag instance
    getAgInstance = instance => {
        this.setState({
            agInstance: instance
        })
    }
    // 添加行
    add = () => {
        const rowData = [{
            name: '',
            num: '',
            price: '',
            priceTotal: '',
            contract: '',
            remark: '',
            shuilv: '',
            bx: '',
            invoiceType: ''
        }]
        this.state.agInstance.api.updateRowData({
            add: rowData,
            addIndex: 0
        })
    }
    // 删除行
    del = () => {
        const selectedRows = this.state.agInstance.api.getSelectedRows()
        this.state.agInstance.api.updateRowData({
            remove: selectedRows
        })
    }
    render() {
        const {type} = this.props
        // 如果是新增，就清空数据, 保证每次新增进来都没有数据
        if(type === 'add' && !!this.state.agInstance) {
            this.state.agInstance.api.setRowData([])
        }
        return (
            <>
                <div className="button-area">
                    <Button type="primary" onClick={this.add} disabled={type==='view'}>添加</Button>
                    <Button type="primary" danger onClick={this.del} disabled={type==='view'}>删除</Button>
                    <div style={{height: '55vh'}}>
                        <Table name="BaoXiaoDanTab" columns={this.state.columns} rowData={this.state.rowData} getAgInstance={this.getAgInstance}></Table>
                    </div>
                </div>
            </>
        )
    }
}
