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
import { OmitProps } from 'antd/lib/transfer/renderListBody'

export default props => {
    // tabs
    const { TabPane } = Tabs
    function callback(key) {
        console.log(key)
    }
    // Select
    const { Option } = Select
    return (
        <>
                <Row gutter={32}>
                    <Col span={8}>
                        <Form.Item label="单据编号" name="id">
                            <Input placeholder="单据编号" defaultValue="123"/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="业务日期">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="提交人">
                            <Input placeholder="提交人" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={32}>
                    <Col span={8}>
                        <Form.Item label="提交日期">
                            <DatePicker disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="销售组织">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="请选择销售组织"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="1">Jack</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="销售部门">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="请选择销售组织"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
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
                        <Form.Item label="销售类型">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="请选择销售组织"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="1">Jack</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="预算类型">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="请选择销售组织"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="1">Jack</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="客户名称">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="请选择销售组织"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
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
                        <Form.Item label="发票类型">
                            <Radio.Group>
                                <Radio value={1}>普票</Radio>
                                <Radio value={2}>专票</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="税率">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="请选择销售组织"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="1">Jack</Option>
                                <Option value="2">Lucy</Option>
                                <Option value="3">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="价税总计">
                            <Input disabled placeholder="价税总计" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={32}>
                    <Col span={8}>
                        <Form.Item label="核算维度">
                            <Input disabled placeholder="核算维度" />
                        </Form.Item>
                    </Col>
                    <Col span={16}>
                        <Form.Item label="备注" wrapperCol={{ span: 21 }} labelCol={{ span: 3 }}>
                            <Input placeholder="" />
                        </Form.Item>
                    </Col>
                </Row>
                <Tabs
                    defaultActiveKey="1"
                    onChange={callback}
                >
                    <TabPane key="1" tab="应收详情表">
                        <Tab1 form={props.form}></Tab1>
                    </TabPane>
                    <TabPane key="2" tab="上传附件">b</TabPane>
                </Tabs>
        </>
    )
}