// name 属性是用来在LocalStorage里存储表头信息时用到的标识，看是哪一个组件表格
import React, {PureComponent} from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import './index.less'

export default class AgGridDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [],
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
        ctrlV: "ctrl + V",
        chartRange: '图表展示',
        Column: 'a',
        data: '数据筛选',
        settings: '图表类型',
        rangeChartTitle: '图表展示',
        categories: '横坐标',
        series: '纵坐标'
    }

    onGridReady(params) {
        this.gridApi = params.api
        this.columnApi = params.columnApi
        this.gridApi.sizeColumnsToFit() // 调整表格大小自适应
        // 把实例传递给父组件
        this.props.getAgInstance(params)
        // 如果本地有用户存储过得表头信息，就重新设置表头
        const userColumns = window.localStorage.getItem(this.props.name)
        if(!!userColumns) {
            const columnState = JSON.parse(userColumns)
            this.columnApi.setColumnState(columnState)
        }
    }

    // onButtonClick = () => {
    //     const selectedNodes = this.gridApi.getSelectedNodes()
    //     const selectedData = selectedNodes.map(node => node.data)
    //     const selectedDataStringPresentation = selectedData.map(node => node.name + '' + node.sex).join(', ')
    //     console.log(selectedDataStringPresentation)
    //     console.log(selectedNodes, 'nodes')
    //     console.log(selectedData, 'data')
    //     console.log(this.columnApi.getColumn('1'))
    // }

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
    // 右侧菜单
    getContextMenuItems = params => {
        return [
            // {
            //     name: '删除',
            //     action: () => {
            //         const arr = []
            //         arr.push(params.node.data)
            //         params.api.updateRowData({remove: arr})
            //     }
            // },
            'copy',
            'copyWithHeaders',
            'chartRange',
            'export',
            'autoSizeAll'
        ]
    }

    // 图表相关
    getChartToolbarItems = () => {
        return ['chartData', 'chartSettings']
    }
    // 用户设置表头隐藏列相关
    onColumnVisible = () => {
        // console.log(this.columnApi.getColumnState())
        const columnState = JSON.stringify(this.columnApi.getColumnState())
        window.localStorage.setItem(this.props.name, columnState)
    }

    componentDidMount() {
        const columnDefs = this.props.columns.slice()
        this.setState({
            columnDefs
        })
    }

    render() {
        return (
            <div className="ag-theme-balham" style={{width: '100%', height: '100%'}}>
                {/*<Button onClick={this.onButtonClick}>get row</Button>*/}
                <AgGridReact
                    alwaysShowVerticalScroll={true}
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.rowData}
                    enableCharts={true}
                    rowSelection="multiple"
                    // 点击不选中单元格
                    // suppressCellSelection={true}
                    // 点一个选一个，false的话是按住ctrl建
                    // rowMultiSelectWithClick={true}
                    // 单机不选择行，必须点checkbox
                    suppressRowClickSelection={true}
                    // 不显示横向滚动条
                    // suppressHorizontalScroll={true}
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
                    // suppressPaginationPanel={true}
                    // paginationAutoPageSize={true}
                    // floatingFilter={true}
                    defaultColDef={{
                        editable: true,
                        filter: true,
                        resizable: true,
                        sortable: true,
                    }}
                    // 键盘操作
                    onCellKeyDown={this.onCellKeyDown}
                    onCellKeyPress={this.onCellKeyPress}
                    onCellEditingStopped={function (event) {
                        console.log(event.data)
                        var itxst = JSON.stringify(event.data);
                        console.log(itxst)
                    }}
                    // 图表相关
                    getChartToolbarItems={this.getChartToolbarItems}
                    // 右侧菜单封装
                    getContextMenuItems={this.getContextMenuItems}
                    // 用户隐藏表头操作触发的回调
                    onColumnVisible={this.onColumnVisible}
                >
                </AgGridReact>
            </div>
        )
    }
}
