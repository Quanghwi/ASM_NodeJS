import React, { useEffect, useState } from 'react'
import { ICategory } from '../../../interface/interface'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Card, Col, Form, Input, Row } from 'antd'


interface IProps {
  categories: ICategory[],
  onUpdate: (categories: ICategory) => void
}

const UpdateCategory = (props: IProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const currentCate = props.categories.find((categories: ICategory) => categories.id == Number(id))
  console.log(id);

  const [cate, setCate] = useState<ICategory>()
  useEffect(() => {
    setCate(currentCate)
  }, [props])

  const [form] = Form.useForm();

  const setFields = () => {
    form.setFieldsValue({
      id: cate?.id,
      name: cate?.cateName
    })
  }
  useEffect(() => {
    setFields()
  }, [cate])

  const onFinish = (values: any) => {
    props.onUpdate(values)
    navigate('/admin/categories')
  }
  return (
    <div>
      <Form
        form={form}
        name="basic"
        style={{ maxWidth: 1000, margin: 'auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h2>Cập Nhật Danh Mục</h2>
        <Card
          hoverable
        >    <Row>
            <Col>
              <Form.Item
                label="Tên danh mục"
                name="name"
                rules={[{ required: true, message: 'Nhập tên danh mục!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ margin: '20px' }}>
                  Cập nhật
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form></div>
  )
}

export default UpdateCategory