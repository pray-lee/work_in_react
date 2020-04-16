import React, {useState, useCallback, useEffect } from "react";
import {Form} from 'antd'
import moment from 'moment'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/Table'
import Drawer from '../../../components/Drawer'
import SliderView from './SliderView'
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
export default () => {
    const columns = [
        {
            title: '单据编号',
            dataIndex: 'name',
            key: 'name',
            width: 200,
            fixed: 'left',
            render: text => <a>{text}</a>,
        },
        {
            title: '销售组织',
            dataIndex: 'age',
            key: 'age',
            width: 200,
        },
        {
            title: '销售部门',
            dataIndex: 'address',
            key: 'address',
            width: 200,
        },
        {
            title: '客户名称',
            dataIndex: 'a',
            key: 'a',
            width: 200,
        },
        {
            title: '发票类型',
            dataIndex: 'b',
            key: 'b',
            width: 200,
        },
        {
            title: '税率（%）',
            dataIndex: 'c',
            key: 'c',
            width: 200,
        },
        {
            title: '价税合计',
            dataIndex: 'd',
            key: 'd',
            width: 200,
        },
        {
            title: '未开票金额',
            dataIndex: 'f',
            key: 'f',
            width: 200,
        },
        {
            title: '未核销应收金额',
            dataIndex: 'e',
            key: 'e',
            width: 200,
        },
        {
            title: '提交日期',
            dataIndex: 'g',
            key: 'g',
            width: 200,
        },
        {
            title: '收件人',
            dataIndex: 'h',
            key: 'h',
            width: 200,
        },
        {
            title: '电话',
            dataIndex: 'i',
            key: 'i',
            width: 200,
        },
        {
            title: '地址',
            dataIndex: 'j',
            key: 'j',
            width: 200,
        },
        {
            title: '单据状态',
            dataIndex: 'k',
            key: 'k',
            width: 200,
        },
        {
            title: '业务日期',
            dataIndex: 'l',
            key: 'l',
            width: 200,
        },
        {
            title: '备注',
            dataIndex: 'j',
            key: 'j',
            width: 200,
        },
        {
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 200,
            render: () => (
                <span>
                            <a style={{marginRight: 16,color: '#ff5252'}}>删除</a>
                            <a>提交</a>
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
    // form
    const [form] = Form.useForm()
    const formLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 18
        }
    }
    // initialValues
    const initialValues = {
        danjubianhao: '123',
        date: moment('2020-04-01', 'YYYY-MM-DD')
    }
    // 关闭
    const onClose = useCallback(() => {
        setVisible(false)
    }, [])
    // 提交
    const onSubmit = useCallback(() => {
        console.log(form.getFieldsValue())
    }, [form])
    // 装载完成把方法赋值进去
    useEffect(() => {
        //这里要定义点击事件传递给OperatorButtons======================================================
        const view = () => {
            setTitle('查看开票申请')
            setType('view')
            setHasFooter(false)
            setVisible(true)
        }
        const edit = () => {
            setTitle('编辑开票申请')
            setType('edit')
            setHasFooter(true)
            setVisible(true)
        }
        const add = () => {
            setTitle('新增开票申请')
            setType('add')
            setHasFooter(true)
            setVisible(true)
        }
        setEvents({
            view,
            edit,
            add
        })
    }, [])

    // 侧滑框的视图
    function drawerContent(type) {
        switch (type) {
            case 'view':
                return <SliderView form={form} type="view"/>
                break
            case 'add':
                return <SliderView form={form} type="add"/>
                break
            case 'edit':
                return <SliderView form={form} type="edit" />
                break
            default:
                return <SliderView form={form} type="view" />
        }
    }

    return (
        <>
            <OperatorButtons events={events}/>
            <Table columns={columns} data={data}/>
            <Drawer visible={visible} hasFooter={hasFooter} title={title} onClose={onClose} onSubmit={onSubmit}>
                <Form {...formLayout} form={form} initialValues={initialValues}>
                    {drawerContent(type)}
                </Form>
            </Drawer>
        </>
    )
}
