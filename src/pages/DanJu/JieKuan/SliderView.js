import React from 'react'
import {
    Form,
    Input,
    Row,
    Col,
    Tabs,
    DatePicker,
    Select,
    Radio,
} from 'antd'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

export default props => {
    const {type} = props
    // tabs
    const {TabPane} = Tabs

    function callback(key) {
        console.log(key)
    }

    // Select
    const {Option} = Select
    return (
        <>
            <Row gutter={32}>
                <Col span={8}>
                    <Form.Item label="单据编号" name="danjubianhao">
                        <Input placeholder="单据编号" disabled={type === 'view'}/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="业务日期" name="date">
                        <DatePicker disabled={type === 'view'}/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="申请组织">
                        <Select
                            showSearch
                            style={{width: '100%'}}
                            placeholder="请选择申请组织"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            disabled={type === 'view'}
                        >
                            <Option value="1">Jack</Option>
                            <Option value="2">Lucy</Option>
                            <Option value="3">Tom</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={8}>
                    <Form.Item label="申请部门">
                        <Select
                            showSearch
                            style={{width: '100%'}}
                            placeholder="请选择申请部门"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            disabled={type === 'view'}
                        >
                            <Option value="1">Jack</Option>
                            <Option value="2">Lucy</Option>
                            <Option value="3">Tom</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="借款单位类型">
                        <Select
                            showSearch
                            style={{width: '100%'}}
                            placeholder="请选择借款单位类型"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            disabled={type === 'view'}
                        >
                            <Option value="1">Jack</Option>
                            <Option value="2">Lucy</Option>
                            <Option value="3">Tom</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="借款单位">
                        <Select
                            showSearch
                            style={{width: '100%'}}
                            placeholder="请选择借款单位"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            disabled={type === 'view'}
                        >
                            <Option value="1">Jack</Option>
                            <Option value="2">Lucy</Option>
                            <Option value="3">Tom</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={8}>
                    <Form.Item label="收款银行">
                        <Input disabled={type === 'view'} placeholder="请输入收款银行"/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="收款账号">
                        <Input disabled={type === 'view'} placeholder="请输入收款账号"/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="借款类型">
                        <Select
                            showSearch
                            style={{width: '100%'}}
                            placeholder="请选择借款类型"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            disabled={type === 'view'}
                        >
                            <Option value="1">Jack</Option>
                            <Option value="2">Lucy</Option>
                            <Option value="3">Tom</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={8}>
                    <Form.Item label="核算维度">
                        <Input disabled={type === 'view'} placeholder="请输入核算维度"/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="资金计划类型">
                        <Select
                            showSearch
                            style={{width: '100%'}}
                            placeholder="请选择资金计划类型"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            disabled={type === 'view'}
                        >
                            <Option value="1">Jack</Option>
                            <Option value="2">Lucy</Option>
                            <Option value="3">Tom</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="借款合计">
                        <Input disabled={type === 'view'} placeholder="请输入借款合计"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={8}>
                    <Form.Item label="是否有发票">
                        <Radio.Group disabled={type === 'view'}>
                            <Radio value={1}>是</Radio>
                            <Radio value={2}>否</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="合同编号">
                        <Input disabled={type === 'view'} placeholder="请输入合同编号"/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="提交人">
                        <Input disabled={type === 'view'} placeholder="请输入提交人"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={8}>
                    <Form.Item label="提交日期">
                        <DatePicker disabled={type==='view'}/>
                    </Form.Item>
                </Col>
                <Col span={16}>
                    <Form.Item label="备注" wrapperCol={{span: 21}} labelCol={{span: 3}}>
                        <Input placeholder="" disabled={type === 'view'}/>
                    </Form.Item>
                </Col>
            </Row>
            <Tabs
                defaultActiveKey="1"
                onChange={callback}
                animated={false}
            >
                <TabPane key="1" tab="借款详情">
                    <Tab1 form={props.form} type={type}></Tab1>
                </TabPane>
                <TabPane key="2" tab="上传附件">
                    <Tab2></Tab2>
                </TabPane>
            </Tabs>
        </>
    )
}
