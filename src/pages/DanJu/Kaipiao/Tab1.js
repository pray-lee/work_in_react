import React from 'react'
import {Button} from 'antd'
import Table from '../../../components/AgGrid'

export default class Tab1 extends React.Component {
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
                headerName: '销售类型',
                field: 'a',
            },
            {
                headerName: '核算维度',
                field: 'b',
            },
            {
                headerName: '预算类型',
                field: 'c',
            },
            {
                headerName: '含税销售金额',
                field: 'd',
            },
            {
                headerName: '未开票申请金额',
                field: 'e',
            },
            {
                headerName: '本期开票申请金额',
                field: 'f',
            },
            {
                headerName: '开票内容',
                field: 'g',
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
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
            f: '',
            g: ''
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
                        <Table name="KaipiaoTab" columns={this.state.columns} rowData={this.state.rowData} getAgInstance={this.getAgInstance}></Table>
                    </div>
                </div>
            </>
        )
    }
}
