import React from 'react'
import {Table} from 'antd';
// import {Resizable} from 'react-resizable'
// import {DownOutlined} from '@ant-design/icons';
import './index.less'

// 配置可伸缩表头
// const ResizeableTitle = props => {
//     const {onResize, width, ...restProps} = props;
//
//     if (!width) {
//         return <th {...restProps} />;
//     }
//
//     return (
//         <Resizable
//             width={width}
//             height={0}
//             handle={resizeHandle => (
//                 <span
//                     className={`react-resizable-handle react-resizable-handle-${resizeHandle}`}
//                     onClick={e => {
//                         e.stopPropagation();
//                     }}
//                 />
//             )}
//             onResize={onResize}
//             draggableOpts={{enableUserSelectHack: false}}
//         >
//             <th {...restProps} />
//         </Resizable>
//     );
// }


// 展示数据
const data = [];
for (let i = 1; i <= 100; i++) {
    data.push({
        key: i,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        a: `${i}2askldjflasjdfjaskjfjasdjfasdj`,
        b: `${i}askldjflasjdfjaskjfjasdjfasdj2`,
        c: `${i}askldjflasjdfjaskjfjasdjfasdj2`,
        d: `${i}askldjflasjdfjaskjfjasdjfasdj2`,
        e: `${i}askldjflasjdfjaskjfjasdjfasdj2`,
        f: `${i}askldjflasjdfjaskjfjasdjfasdj2`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
}

// 展开项配置
// const expandable = {
//     expandedRowRender: record => <p>{record.description}</p>,
// };
// 选择功能配置, 就是单选和多选的那些
const rowSelection = {
    type: 'checkbox',
    fixed: true
}

// component
export default class TableComponent extends React.Component {
    state = {
        ellipsis: true, //省略号
        // expandable,
        rowSelection, // 默认值checkbox ,如果不需要设置为undefined
        size: 'small',
        scroll: undefined, // 表格允许滚动
        tableLayout: 'fixed',
        columns: []
    };
    componentDidMount() {
        const columns = this.props.columns.slice()
        this.setState({
            columns
        })
    }

    // 可伸缩表头配置
    // components = {
    //     header: {
    //         cell: ResizeableTitle,
    //     },
    // }
    // 分页配置
    pagination = {
        position: 'bottom',
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '40', '50'],
        // hideOnSinglePage: true,
    };
    scroll = {
        // 这个属性只有fix header的时候才能生效
        scrollToFirstRowOnChange: true,
        // 表格滚动高度，想设置头部固定的话，设置这个属性就可以了。
        y: 'calc(100vh - 64px - 96px - 24px - 39px - 57px - 20px)'
    }
    // handleResize = index => (e, {size}) => {
    //     this.setState(({columns}) => {
    //         const nextColumns = [...columns];
    //         nextColumns[index] = {
    //             ...nextColumns[index],
    //             width: size.width,
    //         };
    //         return {columns: nextColumns};
    //     });
    // }

    render() {
        const tableColumns = this.state.columns.map(item => ({...item, ellipsis: this.state.ellipsis}));
        // 可伸缩表头数据设置
        // const resizableColumns = tableColumns.map((col, index) => {
        //     return {
        //         ...col,
        //         onHeaderCell: column => ({
        //             width: column.width,
        //             onResize: this.handleResize(index),
        //         }),
        //     }
        // });

        return (
            <div>
                <Table
                    bordered
                    {...this.state}
                    pagination={this.pagination}
                    // components={this.components}
                    columns={tableColumns}
                    dataSource={data}
                    scroll={this.scroll}
                />
            </div>
        );
    }
}
