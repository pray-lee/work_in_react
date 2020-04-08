import React, {useState} from 'react';
import {Table, Input, InputNumber, Form, Button} from 'antd';

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

const EditableTable = props => {
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const [deleteKeys, setDeleteKeys] = useState([])

    const isEditing = record => record.key === editingKey;

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

    const columns = [
        {
            title: '产品或服务名称',
            dataIndex: 'name',
            editable: true,
            width: 200
        },
        {
            title: '计价数量',
            dataIndex: 'num',
            editable: true,
            width: 200
        },
        {
            title: '含税单价',
            dataIndex: 'price',
            editable: true,
            width: 200
        },
        {
            title: '价税合计',
            dataIndex: 'totalPrice',
            editable: true,
            width: 200
        },
        {
            title: '合同编号',
            dataIndex: 'id',
            editable: true,
            width: 200
        },
        {
            title: '备注',
            dataIndex: 'remark',
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
                return editable ? (
                    <span>
            <a
                onClick={() => save(record.key)}
                style={{
                    marginRight: 8,
                }}
            >
              Save
            </a>
              <a onClick={cancel}>Cancel</a>
          </span>
                ) : (
                    <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </a>
                );
            },
        },
    ];
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
    return (
        <div>
            <Button type="primary" onClick={add}>添加</Button>
            <Button danger onClick={del}>删除</Button>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                size="small"
                bordered
                dataSource={data}
                columns={mergedColumns}
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
