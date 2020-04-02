import React, {useState, useCallback} from "react";
import {DownOutlined} from '@ant-design/icons'
import OperatorButtons from "../../components/OperatorButtons";
import Table from '../../components/Table'
import Drawer from '../../components/Drawer'

export default props => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            fixed: 'left',
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
    // state
    const [visible, setVisible] = useState(false)
    const [hasFooter, setHasFooter] = useState(true)
    const onClose = () => {
        setVisible(false)
    }
    const onShow = () => {
        setVisible(true)
    }
    // 按钮类型
    const [type, setType] = useState('')
    // 权限
    const permissions = ['add', 'edit', 'view']
    // 按钮操作
    const events = {
        view: () => {
            onShow()
            setType('view')
            setHasFooter(false)
        }
    }
    const drawerContent = type => {
        switch (type) {
            case 'view':
                return <div>view</div>
                break
            case 'add':
                return <div>add</div>
            default:
                return null
        }

    }
    return (
        <>
            <OperatorButtons permissions={permissions} events={events}/>
            <Table columns={columns}/>
            <Drawer visible={visible} hasFooter={hasFooter} title="查看" onClose={onClose}>
                {drawerContent(type)}
            </Drawer>
        </>
    )
}
