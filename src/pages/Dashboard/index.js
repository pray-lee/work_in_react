import React, {useEffect} from "react";
import {DownOutlined} from '@ant-design/icons'
import OperatorButtons from "../../components/OperatorButtons";
import Table from '../../components/Table'
import axiosTest from '../../request/test'

export default props => {
    useEffect(() => {
        setTimeout(() => {
            axiosTest()
        }, 2000)
    }, [])
    console.log(props, 'Dashboard')
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
    return (
        <>
           <OperatorButtons/>
           <Table columns={columns}/>
        </>
    )
}
