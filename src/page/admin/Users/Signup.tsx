import React from 'react'
import { Button, Card, Form, Input } from 'antd';
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
const Signup = () => {
    return (
        <div style={{textAlign:'center'}}>
            <Card
                hoverable
                style={{margin:'2rem',width:'100%',maxWidth:'500px', display:'inline-block'}}
            ><h2>Đăng kí</h2>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="rePassword"
                        rules={[{ required: true, message: 'Please input your re-password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Đăng kí
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Signup