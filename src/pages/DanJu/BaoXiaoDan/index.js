import React, {useState, useCallback, useEffect} from "react";
import {Form} from 'antd'
import moment from 'moment'
import Drawer from '../../../components/Drawer'
import SliderView from './SliderView'
import CommonLayout from "../../../components/CommonLayout";

// rowData
const rowData = []
for (var i = 0; i < 100; i++) {
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
    })
}
export default () => {
    const columns = [
        {
            headerName: '',//选择列头部显示的文字，可以为空
            checkboxSelection: true,//设置为ture显示为复选框
            headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
            'pinned': 'left', //固定再左边
            width: 100 //列的宽度
        },
        {
            headerName: '单据编号',
            field: 'a',
        },
        {
            headerName: '申请组织',
            field: 'b'
        },
        {
            headerName: '申请部门',
            field: 'c'
        },
        {
            headerName: '往来单位类型',
            field: 'd',
            colId: 'd'
        },
        {
            headerName: '往来单位',
            field: 'e'
        },
        {
            headerName: '收款银行',
            field: 'f'
        },
        {
            headerName: '收款账号',
            field: 'g'
        },
        {
            headerName: '申请报销金额',
            field: 'h'
        },
        {
            headerName: '核销借款金额',
            field: 'i'
        },
        {
            headerName: '应付款金额',
            field: 'j'
        },
        {
            headerName: '未付款金额',
            field: 'k'
        },
        {
            headerName: '已付款金额',
            field: 'l'
        },
        {
            headerName: '业务日期',
            field: 'm'
        },
        {
            headerName: '备注',
            field: 'n'
        },
        {
            headerName: '提交人',
            field: 'o'
        },
        {
            headerName: '单据状态',
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
        setAgInstance(instance)
    }, [])

// 装载完成把方法赋值进去
    useEffect(() => {
        //这里要定义点击事件传递给OperatorButtons======================================================
        const view = () => {
            setTitle('查看报销单')
            setType('view')
            setHasFooter(false)
            setVisible(true)
        }
        const edit = () => {
            setTitle('编辑报销单')
            setType('edit')
            setHasFooter(true)
            setVisible(true)
        }
        const add = () => {
            setTitle('新增报销单')
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
                return <SliderView form={form} type="edit"/>
                // break
            default:
                return <SliderView form={form} type="view"/>
        }
    }

    return (
        <>
            {/*<OperatorButtons events={events}/>*/}
            {/*<div style={{height: '85vh'}}>*/}
            {/*    <Table name="BaoXiaoDan" columns={columns} rowData={rowData} getAgInstance={getAgInstance}></Table>*/}
            {/*</div>*/}
            <CommonLayout
                tableAttr={{
                    name: 'BaoXiaoDan',
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
