import React, {useState, useCallback, useEffect } from "react";
import {Form} from 'antd'
import moment from 'moment'
import Drawer from '../../../components/Drawer'
import SliderView from './SliderView'
import CommonLayout from "../../../components/CommonLayout";
// 展示数据
const rowData = [];
for (let i = 1; i < 100; i++) {
    rowData.push({
        a: Math.random(),
        b: Math.random(),
        c: Math.random(),
        d: Math.random(),
        e: Math.random(),
        f: Math.random(),
        g: Math.random(),
        h: Math.random(),
        i: Math.random(),
        j: Math.random(),
        k: Math.random(),
        l: Math.random(),
        m: Math.random(),
        n: Math.random(),
        o: Math.random(),
        p: Math.random(),
    });
}
export default () => {
    const columns = [
        {
            headerName: '单据编号',
            field: 'a'
        },
        {
            headerName: '销售组织',
            field: 'b'
        },
        {
            headerName: '销售部门',
            field: 'c'
        },
        {
            headerName: '客户名称',
            field: 'd'
        },
        {
            headerName: '发票类型',
            field: 'e'
        },
        {
            headerName: '税率（%）',
            field: 'f'
        },
        {
            headerName: '价税合计',
            field: 'g'
        },
        {
            headerName: '未开票金额',
            field: 'h'
        },
        {
            headerName: '未核销应收金额',
            field: 'i'
        },
        {
            headerName: '提交日期',
            field: 'j'
        },
        {
            headerName: '收件人',
            field: 'k'
        },
        {
            headerName: '电话',
            field: 'l'
        },
        {
            headerName: '地址',
            field: 'm'
        },
        {
            headerName: '单据状态',
            field: 'n'
        },
        {
            headerName: '业务日期',
            field: 'o'
        },
        {
            headerName: '备注',
            field: 'p'
        },
    ]
    // state
    const [agInstance, setAgInstance] = useState(null)
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
    // 获取ag实例
    const getAgInstance = useCallback(instance => {
        console.log('aginstance kaipiao')
        setAgInstance(instance)
    }, [])
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
                // break
            case 'add':
                return <SliderView form={form} type="add"/>
                // break
            case 'edit':
                return <SliderView form={form} type="edit" />
                // break
            default:
                return <SliderView form={form} type="view" />
        }
    }

    return (
        <>
            {/*<OperatorButtons events={events}/>*/}
            {/*<Table name="Kaipiao" columns={columns} rowData={rowData} getAgInstance={getAgInstance} />*/}
            <CommonLayout
                tableAttr={{
                    name: 'Kaipiao',
                    columns: columns,
                    rowData: rowData,
                    getAgInstance
                }}
                operatorButtonAttr={{
                    events
                }}
            />
            <Drawer visible={visible} hasFooter={hasFooter} title={title} onClose={onClose} onSubmit={onSubmit}>
                <Form {...formLayout} form={form} initialValues={initialValues}>
                    {drawerContent(type)}
                </Form>
            </Drawer>
        </>
    )
}
