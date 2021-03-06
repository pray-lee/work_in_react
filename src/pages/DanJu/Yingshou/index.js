import React, {useState, useCallback, useEffect} from "react";
import {Form} from 'antd'
import moment from 'moment'
import Drawer from '../../../components/Drawer'
import SliderView from './SliderView'
import OperatorButtons from "../../../components/OperatorButtons";
import Table from '../../../components/AgGrid'
const columns = [
    {
        headerName: '',//选择列头部显示的文字，可以为空
        checkboxSelection: true,//设置为ture显示为复选框
        headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
        'pinned': 'left', //固定再左边
        // width: 100 //列的宽度
    },
    {
        headerName: '单据编号',
        field: 'a',
        hide: true,
        cellRenderer: 'testRenderer'
    },
    {
        headerName: '销售组织',
        field: 'b'
    },
    {
        headerName: '提交人',
        field: 'c'
    },
    {
        headerName: '销售部门',
        field: 'd',
        colId: 'd'
    },
    {
        headerName: '客户名称',
        field: 'e'
    },
    {
        headerName: '发票类型',
        field: 'f'
    },
    {
        headerName: '销售类型',
        field: 'g'
    },
    {
        headerName: '预算类型',
        field: 'h'
    },
    {
        headerName: '核算维度',
        field: 'i'
    },
    {
        headerName: '税率（%）',
        field: 'j'
    },
    {
        headerName: '价税合计',
        field: 'k'
    },
    {
        headerName: '未申请开票金额',
        field: 'l'
    },
    {
        headerName: '提交日期',
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
    {
        headerName: '操作',
        filed: 'a',
        cellRenderer: 'actionRenderer'
    }
]
export default () => {
    // state
    const [agInstance, setAgInstance] = useState(null)
    const [visible, setVisible] = useState(false)
    const [hasFooter, setHasFooter] = useState(true)
    const [title, setTitle] = useState('查看')
    const [type, setType] = useState('查看')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
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

    if(agInstance) {
        console.log(agInstance.columnApi.getColumnState())
    }
    // 获取ag实例 ????
    const getAgInstance = useCallback(instance => {
        console.log(11)
        setAgInstance(instance)
    }, [])

    // 设置数据
    const setTableData = data => {
        setLoading(true)
        const t = setTimeout(() => {
            setLoading(false)
            setData(data)
            clearTimeout(t)
        }, 2000)
    }

// 装载完成把方法赋值进去
    useEffect(() => {
        //这里要定义点击事件传递给OperatorButtons======================================================
        const view = () => {
            setTitle('查看应收单')
            setType('view')
            setHasFooter(false)
            setVisible(true)
        }
        const edit = () => {
            setTitle('编辑应收单')
            setType('edit')
            setHasFooter(true)
            setVisible(true)
        }
        const add = () => {
            setTitle('新增应收单')
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
    const drawerContent = useCallback((type) =>{
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
    }, [type])
    console.log('-------------------------render-----------------------')
    return (
        <>
            <OperatorButtons events={events} />
            <Table
                name="Wodeyingshou"
                columns={columns}
                getAgInstance={getAgInstance}
                loading={loading}
                rowData={data}
                setTableData={setTableData}
            ></Table>
            <Drawer visible={visible} hasFooter={hasFooter} title={title} onClose={onClose} onSubmit={onSubmit}>
                <Form {...formLayout} form={form} initialValues={initialValues}>
                    {drawerContent(type)}
                </Form>
            </Drawer>
        </>
    )
}
