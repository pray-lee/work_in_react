import React, {useState} from 'react';
import {Table, Message, Input, InputNumber, Form, Button} from 'antd';
import {Resizable} from 'react-resizable'
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

// 可伸缩列
const EditableCell = ({
                          editing,
                          dataIndex,
                          title,
                          inputType,
                          record,
                          index,
                          children,
                          ...restProps
                      }) => {
    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `请输入${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const originData = [];

for (let i = 0; i < 2; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        num: 32,
        price: `London Park no. ${i}`,
        totalPrice: `London Park no. ${i}`,
        id: Math.random(),
        remark: 'aalskdjfalksjdf'
    });
}

const EditableTable = props => {
    const {disabled} = props
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const [deleteKeys, setDeleteKeys] = useState([])
    const [columns, setColumns] = useState([
        {
            title: '销售类型',
            dataIndex: 'name',
            editable: true,
            width: 200
        },
        {
            title: '核算维度',
            dataIndex: 'num',
            editable: true,
            width: 200
        },
        {
            title: '预算类型',
            dataIndex: 'price',
            editable: true,
            width: 200
        }, {
            title: '含税销售金额',
            dataIndex: 'totalPrice',
            editable: true,
            width: 200
        },
        {
            title: '未开票申请金额',
            dataIndex: 'id',
            editable: true,
            width: 200
        },
        {
            title: '本期申请开票金额',
            dataIndex: 'remark',
            editable: true,
            width: 200
        },
        {
            title: '开票内容',
            dataIndex: 'content',
            editable: true,
            width: 200
        },
        {
            title: '操作',
            fixed: 'right',
            width: 200,
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                console.log(editable, record)
                console.log(editingKey)
                return editable ? (
                    <span>
            <a
                href={null}
                disabled={disabled}
                onClick={() => save(record.key)}
                style={{
                    marginRight: 8,
                }}
            >
              Save
            </a>
              <a onClick={cancel} disabled={disabled}>Cancel</a>
          </span>
                ) : (
                    <a disabled={editingKey !== '' || disabled} onClick={() => edit(record)}>
                        Edit
                    </a>
                );
            },
        },
    ])

    const isEditing = record => record.key === editingKey;
    const handleResize = index => (e, {size}) => {
        setColumns(columns => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return nextColumns;
        });
    }

    const edit = record => {
        props.form.setFieldsValue({...record});
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async key => {
        try {
            const row = await props.form.validateFields();
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {...item, ...row});
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }

        } catch (errInfo) {
            Message.error('请检查必填信息是否填上')
            console.log('Validate Failed:', errInfo);
        }
    };
    const add = () => {
        const newData = [...data]
        newData.unshift({
            key: Math.random(),
            id: '',
            num: '',
            name: '',
            price: '',
            totalPrice: '',
            remark: ''
        })
        setData(newData)
    };


    const del = () => {
        let newData = data.slice()
        let newDataTemp = []
        deleteKeys.forEach(item => {
            for(let i = 0; i < newData.length; i++){
                if(newData[i].key !== item) {
                    newDataTemp.push(newData[i])
                }

            }
            newData = newDataTemp
            newDataTemp = []
        })
        setData(newData)
    }

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: record => ({
                record,
                inputType: (col.dataIndex === 'num') || (col.dataIndex === 'price') || (col.dataIndex === 'totalPrice') ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    const resizableColumns = mergedColumns.map((col, index) => {
        return {
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: handleResize(index),
            }),
        }
    });
    return (
        <div>
            <Button type="primary" onClick={add} disabled={disabled}>添加</Button>
            <Button danger onClick={del} disabled={disabled}>删除</Button>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                    header: {
                        cell: ResizeableTitle
                    }
                }}
                size="small"
                bordered
                dataSource={data}
                columns={resizableColumns}
                rowClassName="editable-row"
                pagination={false}
                tableLayout="fixed"
                rowSelection={
                    {
                        type: 'checkbox',
                        fixed: true,
                        onChange: function(selectedRowKeys, selectedRows) {
                            setDeleteKeys(selectedRowKeys)
                        }
                    }
                }
            />
        </div>
    );
};

export default EditableTable
