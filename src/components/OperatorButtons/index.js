import React from 'react'
import {Button, Row, Col} from 'antd'
import WrapperComponent from "./WrapperComponent";
import {
    HeatMapOutlined,
    MoneyCollectOutlined,
    PrinterOutlined,
    VerticalAlignBottomOutlined,
    CheckCircleOutlined,
    SearchOutlined,
    PlusOutlined,
    CopyOutlined,
    DeleteOutlined,
    ImportOutlined,
    ExportOutlined,
    DownloadOutlined,
    EditOutlined,
    RollbackOutlined,
    ReloadOutlined,
    SelectOutlined,
    FilterOutlined,
    LockOutlined,
    UnlockOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ArrowDownOutlined
} from '@ant-design/icons';
import './index.less'


@WrapperComponent
class OperatorButtons extends React.PureComponent {
    render() {
        const {events} = this.props
        return (
            <Row>
                <Col span={24} className="operator-btn">
                    <Button size="small" icon={<FilterOutlined/>}>筛选</Button>
                    <Button size="small" icon={<ReloadOutlined/>}>刷新</Button>
                    <Button size="small" icon={<SelectOutlined/>}>全选</Button>
                    {
                        !!events ?
                            <Button size="small" icon={<PlusOutlined/>} onClick={events.add}>新增</Button> : null
                    }
                    <Button size="small" icon={<CopyOutlined/>}>复制</Button>
                    <Button size="small" type="primary" danger>红冲</Button>
                    <Button size="small" icon={<VerticalAlignBottomOutlined/>}>下推</Button>
                    {
                        !!events ?
                            <Button size="small" icon={<EditOutlined/>} onClick={events.edit}>编辑</Button>
                            :
                            null
                    }
                    {
                        !!events ?
                            <Button size="small" icon={<SearchOutlined/>} onClick={events.view}>查看</Button>
                            :
                            null
                    }
                    <Button size="small" icon={<CheckCircleOutlined/>}>提交</Button>
                    <Button size="small" icon={<CheckCircleOutlined/>}>审批</Button>
                    <Button size="small" icon={<RollbackOutlined/>} danger>反审批</Button>
                    <Button size="small" icon={<RollbackOutlined/>} danger>驳回</Button>
                    <Button size="small" icon={<RollbackOutlined/>} danger>撤回</Button>
                    <Button size="small" icon={<DeleteOutlined/>} danger>删除</Button>
                    <Button size="small" icon={<ImportOutlined/>}>导入</Button>
                    <Button size="small" icon={<ExportOutlined/>}>导出</Button>
                    <Button size="small" icon={<UnlockOutlined/>}>启用</Button>
                    <Button size="small" icon={<LockOutlined/>} danger>禁用</Button>
                    <Button size="small" icon={<PrinterOutlined/>}>打印</Button>
                    <Button size="small" icon={<MoneyCollectOutlined/>}>万元</Button>
                    <Button size="small" icon={<PrinterOutlined/>}>打印预览单笔</Button>
                    <Button size="small" icon={<PrinterOutlined/>}>打印预览两笔</Button>
                    <Button size="small" icon={<ArrowRightOutlined/>} danger>结束初始化</Button>
                    <Button size="small" icon={<ArrowLeftOutlined/>} danger>反初始化</Button>
                    <Button size="small" icon={<CopyOutlined/>}>批量复制</Button>
                    <Button size="small" icon={<ArrowDownOutlined/>}>整理断号</Button>
                    <Button size="small" icon={<SearchOutlined/>}>检查断号</Button>
                    <Button size="small" icon={<CopyOutlined/>}>批量复制</Button>
                    <Button size="small" icon={<DeleteOutlined/>} danger>批量删除</Button>
                    <Button size="small" icon={<HeatMapOutlined/>}>凭证核销</Button>
                    <Button size="small" icon={<RollbackOutlined/>}>批量反核销</Button>
                    <Button size="small">生成凭证</Button>
                    <Button size="small" icon={<DownloadOutlined/>}>模板下载</Button>
                    <Button size="small" icon={<PrinterOutlined/>}>打印预览</Button>
                    <Button size="small" icon={<RollbackOutlined/>} danger>密码重置</Button>
                    <Button size="small" icon={<LockOutlined/>} danger>禁用用户</Button>
                    <Button size="small" icon={<UnlockOutlined/>}>激活用户</Button>
                    <Button size="small" icon={<PlusOutlined/>}>角色录入</Button>
                    <Button size="small" icon={<EditOutlined/>}>角色编辑</Button>
                    <Button size="small">重置用户权限缓存</Button>
                    <Button size="small" icon={<UnlockOutlined/>}>批量启用</Button>
                    <Button size="small" icon={<LockOutlined/>} danger>批量禁用</Button>
                    <Button size="small">关联科目</Button>
                </Col>
            </Row>
        )
    }

}

export default OperatorButtons
