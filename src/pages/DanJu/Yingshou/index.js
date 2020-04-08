import React, {useState, useCallback, useEffect } from "react";
import {DownOutlined} from '@ant-design/icons'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/Table'
import Drawer from '../../../components/Drawer'
import DrawerAdd from './add'

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
    const [title, setTitle] = useState('查看')
    const [type, setType] = useState('查看')
    let [events, setEvents] = useState({})
    const onClose = useCallback(() => {
        setVisible(false)
    })
    const onShow = useCallback(() => {
        setVisible(true)
    })
    //这里要定义点击事件传递给OperatorButtons======================================================
    const view = useCallback(() => {
        setTitle('查看应收单')
        setType('view')
        setHasFooter(false)
        onShow()
    },[])
    const edit = useCallback(() => {
        setTitle('编辑应收单')
        setType('edit')
        setHasFooter(true)
        onShow()
    },[])
    const add = useCallback(() => {
        setTitle('新增应收单')
        setType('add')
        setHasFooter(true)
        onShow()
    },[])
    // 装载完成把方法赋值进去
    useEffect(() => {
        setEvents({
            view,
            edit,
            add
        })
        return () => {
            setEvents = {}
        }
    }, [])

    // 侧滑框的视图
    function drawerContent(type) {
        switch (type) {
            case 'view':
                return <div>view</div>
                break
            case 'add':
                return <DrawerAdd />
                break
            case 'edit':
                return <div>edit</div>
                break
            default:
                return <div>view-default</div>
        }
    }

    return (
        <>
            <OperatorButtons events={events}/>
            <Table columns={columns} />
            <Drawer visible={visible} hasFooter={hasFooter} title={title} onClose={onClose}>
                {drawerContent(type)}
            </Drawer>
        </>
    )
}
