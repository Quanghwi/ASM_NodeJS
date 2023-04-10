import React from 'react'
import { ICategory } from '../../../interface/interface'
import { Button, Card, Col, Form, Input, Row, Select, Upload } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'


interface Iprops {
  onAdd: (category: ICategory) => void
}


const AddCategory = (props: Iprops) => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    props.onAdd(values)
    navigate('/admin/categories')
    // window.location.reload()
  };

  return (
    <div>
      <Form
        name="basic"
        style={{ maxWidth: 1000, margin: 'auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h2>Thêm Mới Danh Mục</h2>
        <Card
          hoverable
        >    <Row>
            <Col>
              <Form.Item
                label="Tên danh mục "
                name="cateName"
                rules={[{ required: true, message: 'Nhập tên sản phẩm!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ margin: '20px' }}>
                  Thêm mới
                </Button>
              </Form.Item>

            </Col>

          </Row>
        </Card>
      </Form>
    </div>
  )
}

export default AddCategory