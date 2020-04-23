import React, {Component} from 'react'
import {Button} from 'antd'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import './index.less'

export default class AgGridDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                // {
                //     headerName: '',//选择列头部显示的文字，可以为空
                //     checkboxSelection: true,//设置为ture显示为复选框
                //     headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
                //     'pinned': 'left', //固定再左边
                //     width: 80 //列的宽度
                // },
                {
                    headerName: '最顶层分组'
                    , children: [
                        {
                            headerName: '分组A',
                            children: [
                                {headerName: '姓名', field: 'name', sortable: true, children: [
                                        {headerName: 'a', field: 'a'},
                                        {headerName: 'b', field: 'b'}
                                    ]},
                                {
                                    headerName: '性别',
                                    field: 'sex',
                                    // editable: true,
                                    // sortable: true,
                                    cellEditor: 'agSelectCellEditor',
                                    cellEditorParams: {
                                        values: ['男', '女', '不是人']
                                    }
                                }
                            ]
                        },
                        {
                            headerName: '分组B',
                            children: [
                                {
                                    headerName: '借',
                                    field: 'age',
                                    type: "numericColumn",
                                    cellStyle: params => {
                                        if(params.value >= 8000) {
                                            return {
                                                color: '#fff',
                                                background:'#3276c3'
                                            }
                                        }
                                        return null
                                    }},
                                {headerName: '籍贯', field: 'jg'},
                                {headerName: '省份', field: 'sf'},
                                {headerName: '地址', field: 'dz'}
                            ]
                        }]
                }
            ],
            rowData: [],
        }
    }

    localeText = {
        page: "页",
        more: "更多",
        to: "到",
        of: "of",
        next: "下一页",
        last: "上一页",
        first: "首页",
        previous: "上一页",
        loadingOoo: "加载中...",
        selectAll: "查询全部",
        searchOoo: "查询...",
        blanks: "空白",
        filterOoo: "过滤...",
        applyFilter: "daApplyFilter...",
        equals: "相等",
        notEqual: "不相等",
        lessThan: "小于",
        greaterThan: "大于",
        lessThanOrEqual: "小于等于",
        greaterThanOrEqual: "大于等于",
        inRange: "范围",
        contains: "包含",
        notContains: "不包含",
        startsWith: "开始于",
        endsWith: "结束于",
        group: "组",
        columns: "列",
        filters: "筛选",
        // rowGroupColumns: "laPivot Cols",
        // rowGroupColumnsEmptyMessage: "la drag cols to group",
        // valueColumns: "laValue Cols",
        pivotMode: "条件查询",
        // groups: "laGroups",
        values: "值",
        // pivots: "laPivots",
        // valueColumnsEmptyMessage: "la drag cols to aggregate",
        // pivotColumnsEmptyMessage: "la drag here to pivot",
        // toolPanelButton: "la tool panel",
        noRowsToShow: "数据为空",
        pinColumn: "固定列",
        // valueAggregation: "laValue Agg",
        autosizeThiscolumn: "自适应当前列",
        autosizeAllColumns: "自适应所有列",
        groupBy: "排序",
        ungroupBy: "不排序",
        resetColumns: "重置列",
        expandAll: "展开全部",
        collapseAll: "关闭",
        toolPanel: "工具面板",
        export: "导出",
        csvExport: "导出为CSV格式文件",
        excelExport: "导出到Excel",
        pinLeft: "固定在最左侧",
        pinRight: "固定在最右侧",
        noPin: "不固定",
        sum: "总数",
        min: "最小值",
        max: "最大值",
        none: "无",
        count: "总",
        average: "平均值",
        copy: "复制",
        copyWithHeaders: "携带表头复制",
        ctrlC: "ctrl + C",
        paste: "粘贴",
        ctrlV: "ctrl + V"
    }

    onGridReady(params) {
        this.gridApi = params.api
        this.columnApi = params.columnApi
        this.gridApi.sizeColumnsToFit() // 调整表格大小自适应
    }

    onButtonClick = () => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => node.name + '' + node.sex).join(', ')
        console.log(selectedDataStringPresentation)
        console.log(selectedNodes, 'nodes')
        console.log(selectedData, 'data')
        console.log(this.columnApi.getColumn('1'))
    }

    // 键盘操作
    onCellKeyDown = e => {
        console.log('onCellKeyDown', e)
    }

    onCellKeyPress = e => {
        console.log('onCellKeyPress', e)
        let keyPressed = e.event.key
        console.log('Key Pressed = ' + keyPressed)
        if (keyPressed === 's') {
            let rowNode = e.node
            let newSelection = !rowNode.selected
            console.log(
                'setting selection on node ' +
                rowNode.data.a + ' to ' +
                newSelection
            )
            // rowNode.setSelected(newSelection)
        }
    }

    componentDidMount() {
        const rowData = []
        for (let i = 0; i < 500; i++) {
            rowData.push({name: '张三', sex: '男', age: Math.floor(Math.random()*10000 + 10), 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路1号', 'a': 'a', 'b': 'b'})
        }
        this.setState({
            rowData
        })
    }

    render() {
        return (
            <div className="ag-theme-balham" style={{width: '100%', height: '70vh'}}>
                <Button onClick={this.onButtonClick}>get selected rows</Button>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    rowSelection="multiple"
                    // 点击不选中单元格
                    // suppressCellSelection={true}
                    // 点一个选一个，false的话是按住ctrl建
                    // rowMultiSelectWithClick={true}
                    // 单机不选择行，必须点checkbox
                    suppressRowClickSelection={true}
                    // 始终显示列菜单按钮，默认鼠标移入才显示
                    suppressMenuHide={true}
                    // 范围选择
                    enableRangeSelection={true}
                    onGridReady={params => this.onGridReady(params)}
                    animateRows={true}
                    // 设置语言
                    localeText={this.localeText}
                    // 分页相关
                    // pagination={true}
                    // paginationAutoPageSize={true}
                    // floatingFilter={true}
                    defaultColDef={{
                        editable: true,
                        filter: true,
                        resizable: true
                    }}
                    // 键盘操作
                    onCellKeyDown={this.onCellKeyDown}
                    onCellKeyPress={this.onCellKeyPress}
                    onCellEditingStopped={function (event) {
                        console.log(event.data)
                        var itxst = JSON.stringify(event.data);
                        console.log(itxst)
                    }}
                >
                </AgGridReact>
            </div>
        )
    }
}
