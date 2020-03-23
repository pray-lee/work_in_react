import React from 'react'
import {Table, Switch, Radio, Form} from 'antd';
import {Resizable} from 'react-resizable'
import {DownOutlined} from '@ant-design/icons';
import './index.less'

// 配置可伸缩表头
const ResizeableTitle = props => {
    const {onResize, width, ...restProps} = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={resizeHandle => (
                <span
                    className={`react-resizable-handle react-resizable-handle-${resizeHandle}`}
                    onClick={e => {
                        e.stopPropagation();
                    }}
                />
            )}
            onResize={onResize}
            draggableOpts={{enableUserSelectHack: false}}
        >
            <th {...restProps} />
        </Resizable>
    );
}


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
// 分页配置
const pagination = {
    position: 'bottom',
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '40', '50'],
    // hideOnSinglePage: true,
};
// 选择功能配置, 就是单选和多选的那些
const rowSelection = {
    type: 'checkbox'
}

// component
export default class TableComponent extends React.Component {
    state = {
        pagination,
        ellipsis: false,
        // expandable,
        rowSelection, // 默认值checkbox ,如果不需要设置为undefined
        size: 'small',
        scroll: undefined,
        hasData: true,
        tableLayout: 'fixed',
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: 200,
                render: text => <a>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                width: 200,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: 200,
            },
            {
                title: 'A',
                dataIndex: 'a',
                key: 'a',
                width: 200,
            },
            {
                title: 'B',
                dataIndex: 'b',
                key: 'b',
                width: 200,
            },
            {
                title: 'C',
                dataIndex: 'c',
                key: 'c',
                width: 200,
            },
            {
                title: 'D',
                dataIndex: 'd',
                key: 'd',
                width: 200,
            },
            {
                title: 'F',
                dataIndex: 'f',
                key: 'f',
                width: 200,
            },
            {
                title: 'E',
                dataIndex: 'e',
                key: 'e',
                width: 200,
            },
            {
                title: 'Action',
                key: 'action',
                width: 200,
                render: () => (
                    <span>
                            <a style={{marginRight: 16}}>Delete</a>
                            <a className="ant-dropdown-link">

                                More actions <DownOutlined/>
                            </a>
                      </span>
                ),
            },
        ]
    };
    // 可伸缩表头配置
    components = {
        header: {
            cell: ResizeableTitle,
        },
    }
    handleResize = index => (e, {size}) => {
        this.setState(({columns}) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return {columns: nextColumns};
        });
    }

    handleSizeChange = e => {
        this.setState({size: e.target.value});
    };

    handleYScrollChange = enable => {
        this.setState({yScroll: enable});
    };

    handleXScrollChange = e => {
        this.setState({xScroll: e.target.value});
    };

    render() {
        const {xScroll, yScroll, ...state} = this.state;

        const scroll = {
            // 这个属性只有fix header的时候才能生效
            scrollToFirstRowOnChange: true
        };

        // 表格滚动高度，当头部固定是才能用
        if (yScroll) {
            scroll.y = '75vh';
        }
        // 这个没必要加，让他自己适应就好了。
        // if (xScroll) {
        //     let scrollX = null
        //     this.state.columns.forEach(item => {
        //         scrollX += item.width
        //     })
        //     scroll.x = scrollX
        // }

        const tableColumns = this.state.columns.map(item => ({...item, ellipsis: state.ellipsis}));
        // 固定两端
        if (xScroll === 'fixed') {
            tableColumns[0].fixed = 'left';
            tableColumns[tableColumns.length - 1].fixed = 'right';
        }

        // 可伸缩表头数据设置
        const resizableColumns = tableColumns.map((col, index) => {
            return {
                ...col,
                onHeaderCell: column => ({
                    width: column.width,
                    onResize: this.handleResize(index),
                }),
            }
        });

        return (
            <div>
                <Form
                    layout="inline"
                    className="components-table-demo-control-bar"
                    style={{ paddingBottom: 16 }}
                >
                    <Form.Item label="Fixed Header">
                        <Switch checked={!!yScroll} onChange={this.handleYScrollChange} />
                    </Form.Item>
                    <Form.Item label="Size">
                        <Radio.Group value={state.size} onChange={this.handleSizeChange}>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="middle">Middle</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Table Scroll">
                        <Radio.Group value={xScroll} onChange={this.handleXScrollChange}>
                            <Radio.Button value={undefined}>Unset</Radio.Button>
                            <Radio.Button value="scroll">Scroll</Radio.Button>
                            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Form>
                <Table
                    bordered
                    {...this.state}
                    components={this.components}
                    columns={resizableColumns}
                    dataSource={state.hasData ? data : null}
                    scroll={scroll}
                />
            </div>
        );
    }
}
