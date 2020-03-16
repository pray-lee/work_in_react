import React from 'react'
import {Form, Input, Button, Checkbox, Row, Col} from 'antd';
import {UserOutlined, LockOutlined, TrademarkCircleOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux'
import {requestLogin} from '../../actions/user'
import {Redirect} from 'react-router-dom'
import './login.less'
const Login = () => {
    const dispatch = useDispatch()
    const {isLoading, isLogin} = useSelector(state => state.user)
    const onFinish = values => {
        // fake token
        values.authToken = 'asdkljflasjdfljasdfklajsdlfjasdjfasldkjfklasjdjfasdfj'
        values.id = '1'
        dispatch(requestLogin(values))
    };
    return (
        !isLogin
            ?
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: false}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: '请输入用户名'}]}
                >
                    <Input disabled={isLoading} prefix={<UserOutlined className="site-form-item-icon"/>}
                           placeholder="用户名"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: '请输入密码'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        disabled={isLoading}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                {/*自定义校验*/}
                <Form.Item
                    name="validCode"
                    rules={[
                        {required: true, message: '请输入正确的图片验证码'},
                        ({getValidValue}) => ({
                            validator(rule, value) {
                                if (value !== '') {
                                    return Promise.resolve(value)
                                }
                                return Promise.reject('自定义校验错误信息')
                            }
                        })
                    ]}
                >
                    <Row>
                        <Col span={16}>
                            <Input
                                disabled={isLoading}
                                prefix={<TrademarkCircleOutlined className="site-form-item-icon"/>}
                                type="text"
                                placeholder="图片验证码"
                            />
                        </Col>
                        <Col span={6} offset={2}>
                            <div className="valid-code">图片验证码</div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox disabled={isLoading}>记住我</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button loading={isLoading} type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>
                    {/*Or <a style={{fontWeight: 'bold'}}>立即注册</a>*/}
                </Form.Item>
            </Form>
            :
            <Redirect to="/"/>
    );
};

export default Login
