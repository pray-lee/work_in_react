import React, {useState} from 'react';
import {Table, Input, InputNumber, Popconfirm, Form, Button} from 'antd';

const originData = [];

for (let i = 0; i < 2; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
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
                            message: `Please Input ${title}!`,
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

const EditableTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const [deleteKeys, setDeleteKeys] = useState([])

    const isEditing = record => record.key === editingKey;

    const edit = record => {
        form.setFieldsValue({...record});
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async key => {
        try {
            const row = await form.validateFields();
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
        newData.push({
            key: Math.random(),
            name: '',
            age: '',
            address: '',
        })
        setData(newData)
    };

    const del = () => {
        const newData = []
    }

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
            <a
                href="#"
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
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
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
                rowSelection={
                    {
                        type: 'checkbox',
                        fixed: true,
                        onChange: function(selectedRowKeys, selectedRows) {
                            console.log(selectedRowKeys,selectedRows)
                            if(!!selectedRowKeys.length) {
                                setDeleteKeys([...deleteKeys, ...selectedRowKeys])
                            }
                        }
                    }
                }
            />
        </Form>
    );
};

export default EditableTable