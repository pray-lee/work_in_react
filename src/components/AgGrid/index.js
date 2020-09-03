// name 属性是用来在LocalStorage里存储表头信息时用到的标识，看是哪一个组件表格
import React, {PureComponent} from 'react'
import {Pagination, Button, Spin} from 'antd'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import './index.less'

/**
 * name: 表示表格名称,必传 string
 * columns: 表头 []
 * rowData: 表格数据 []
 * getAgInstance: 获取ag表格实例 传递params参数
 * loading: 加载状态 false/true
 * enablePagination: 是否启用分页
 * setTableData: 设置渲染表格数据的函数
 * action: 渲染操作栏的React node
 */
class AgGridDemo extends PureComponent {
    // 表格默认属性
    static defaultProps = {
        onRowDoubleClick: () => {
            console.log('rowDoubleClicked')
        },
        onRowClick: () => {
            console.log('rowClicked')
        },
        getAgInstance: () => {
            console.log('getAgInstance')
        },
        setTableData: () => {
            console.log('setTableData fn')
        },
        columns: [],
        // 默认表头配置
        defaultColDef: [],
        // 自动分组设置
        autoGroupColumnDef: {},
        enablePagination: true,
        loading: false,
        tableHeight: 600
    }

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [],
            tableHeight: '600px'
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
        columnChart: '条形图',
        groupedColumn: '分组',
        stackedColumn: '堆叠',
        normalizedColumn: '100%堆叠',
        barChart: '柱状图',
        groupedBar: '分组',
        stackedBar: '堆叠',
        normalizedBar: '100%堆叠',
        pieChart: '饼状图',
        pie: '饼状',
        doughnut: "同心圆",
        line: '折线图',
        groupedLine: '分组',
        stackedLine: '堆叠',
        normalizedLine: '100%堆叠',
        areaChart: '区域图',
        groupedArea: '分组',
        stackedArea: '堆叠',
        normalizedArea: '100%堆叠',
        xyChart: '坐标图',
        scatter: '分散',
        bubble: '气泡',
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
        if (!!userColumns) {
            const columnState = JSON.parse(userColumns)
            this.columnApi.setColumnState(columnState)
        }
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

    // pagination fns
    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize)
    }

    onChange = (page, pageSize) => {
        console.log(page, pageSize)
        console.log('------------------------')
        this.getRows(page, pageSize)
    }

    getRows = (page, pageSize) => {
        // 请求数据
        this.props.setTableData()
    }

    // 动态设置表格高度
    setTableHeight = () => {
        // 设置表格高度
        // const operatorHeight = document.querySelector('.ant-row').offsetHeight || 0
        // let paginationDom = document.querySelector('.ant-pagination')
        // const paginationHeight = paginationDom ? paginationDom.offsetHeight : 0
        // const headerHeight = document.querySelector('.ck-header').offsetHeight
        // const tabDom = document.querySelector('.ant-tabs-bar')
        // const tabHeight = tabDom ? (tabDom.offsetHeight + 16) : 0
        // return operatorHeight + paginationHeight + headerHeight + tabHeight + 24
    }

    componentDidMount() {
        const columnDefs = this.props.columns.slice()
        // 装在完成渲染一次
        this.props.setTableData()
        const height = this.setTableHeight()
        this.setState({
            columnDefs,
            tableHeight: `calc(100vh - ${height}px)`
        })
        // resize的时候重新计算表格高度
        window.onresize = () => {
            const height = this.setTableHeight()
            this.setState({
                tableHeight: `calc(100vh - ${height}px)`
            })
        }
    }

    render() {
        console.log('render aginstance')
        return (
            <div className="table-wrapper">
                <Spin spinning={this.props.loading}>
                    <div className="ag-theme-balham" style={{height: this.state.tableHeight}}>
                        <AgGridReact
                            alwaysShowVerticalScroll={true}
                            // 默认表格配置
                            defaultColDef={{
                                editable: true,
                                filter: true,
                                resizable: true,
                                sortable: true,
                                ...this.props.defaultColDef
                            }}
                            columnDefs={this.state.columnDefs}
                            autoGroupColumnDef={this.props.autoGroupColumnDef}
                            rowData={this.props.rowData}
                            enableCharts={true}
                            rowSelection="multiple"
                            // 点击不选中单元格
                            suppressCellSelection={true}
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
                            pagination={true}
                            suppressPaginationPanel={true}
                            // paginationAutoPageSize={true}
                            // floatingFilter={true}
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
                            // 单击
                            onRowClicked={this.props.onRowClick}
                            // 双击行
                            onRowDoubleClicked={this.props.onRowDoubleClick}
                            // 渲染器，返回组件,渲染器设置好了以后，直接去对应的表头信息里加字符串就好了
                            context={{
                                componentParent: this
                            }}
                            frameworkComponents={{
                                testRenderer: function (params) {
                                    return <span className="textRenderer">{params.value}</span>
                                },
                                // actionRenderer: props => {
                                //     const handleClick = () => {
                                //         console.log('---------------cell render props----------------------')
                                //         console.log(props)
                                //         console.log(props.context.componentParent.props.name)
                                //         console.log(props.api.getRowNode(props.node.rowIndex))
                                //         console.log('------------------------------------------------------')
                                //         // 假删除, 到时候还要改成接口
                                //         props.api.updateRowData({
                                //             remove: [props.data]
                                //         })
                                //     }
                                //     // ********************这里还有个条件渲染************************
                                //     return (
                                //         <>
                                //             <Button danger onClick={handleClick} type="primary" size="small">删除</Button>
                                //             <Button type="primary" size="small">编辑</Button>
                                //         </>
                                //     )
                                // }
                                actionRenderer: this.props.action
                            }}

                        >
                        </AgGridReact>
                    </div>
                    {
                        this.props.enablePagination ?
                            <Pagination
                                style={{
                                    paddingTop: 10,
                                }}
                                size="small"
                                showSizeChanger
                                hideOnSinglePage={true}
                                onShowSizeChange={this.onShowSizeChange}
                                defaultCurrent={1}
                                total={500}
                                onChange={this.onChange}
                                showTotal={total => `共有${total}条`}
                            />
                            :
                            null
                    }
                </Spin>
            </div>
        )
    }
}

export default AgGridDemo
