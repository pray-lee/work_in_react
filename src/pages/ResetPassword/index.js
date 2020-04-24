import React from 'react'
import {
    Form,
    Input,
    Button,
} from 'antd';

export default props => {
    const [form] = Form.useForm()
    // 提交
    const onFinish = values => {
        console.log(values)
    }
    // 重置
    const onReset = () => {
        form.resetFields()
    }
    // 表单样式
    const formItemLayout = {
        labelCol: {
            xs: { span: 2 },
            sm: { span: 2 },
        },
        wrapperCol: {
            xs: { span: 8 },
            sm: { span: 8 },
        },
    };
    // 表单item的样式
    const submitWrapperCol = {
        offset:2,
        span: 8
    }
    return (
        <Form
            {...formItemLayout}
            form={form}
            onFinish={onFinish}
            style={{padding: 24}}
        >
            <Form.Item
                name="old-password"
                label="原密码"
                rules={[
                    {
                        required: true,
                        message: '请输入原密码',
                    },
                ]}
                hasFeedback
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
                name="new-password"
                label="新密码"
                rules={[
                    {
                        required: true,
                        message: '请输入新密码',
                    },
                ]}
                hasFeedback
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
                name="check-password"
                label="新密码确认"
                dependencies={['new-password']}
                // hasFeedback
                rules={[
                    {
                        required: true,
                        message: '请再次输入新密码',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('new-password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('两次输入密码不一致');
                        },
                    }),
                ]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item wrapperCol={submitWrapperCol}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
                <Button type="primary" danger style={{marginLeft: 25}} onClick={onReset}>
                    重置
                </Button>
            </Form.Item>
        </Form>
    )
}
