import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, Form, Image, Input, Row, Select } from 'antd';
import { ICategory, IProduct } from '../../../interface/interface';
// import { PlusOutlined } from '@ant-design/icons';
// import { getAll } from '../../../api/product';

interface IProps {
  products: IProduct[],
  onUpdate: (product: IProduct) => void,
  categories: ICategory[],
}

interface DataType {
  value: string | number,
  label: string
}

const UpdateProductPage = (props: IProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const currentProduct = props.products.find((product: IProduct) => product.id == Number(id))

  const [product, setProduct] = useState<IProduct>()
  useEffect(() => {
    setProduct(currentProduct)
  }, [props])

  const data: DataType[] = props.categories.map((item) => {
    return {
      value: item.id,
      label: item.cateName
    }
  })
  console.log(data);

  useEffect(() => {
    setFields()
  }, [product])

  const [form] = Form.useForm();

  const setFields = () => {
    form.setFieldsValue({
      id: product?.id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      description: product?.description,
      idCate: product?.idCate
    })
  }

  const onFinish = (values: any) => {
    props.onUpdate(values);
    navigate('/admin/products')
    // window.location.reload()
  };

  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1200, margin: 'auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h2>Cập nhật sản phẩm</h2>
        <Card
          hoverable
        >
          <Row>

            <Col span={6}>
              <Form.Item
                label=""
                name="id"
                style={{ display: 'none' }}
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Ảnh sản phẩm" name="image" >
                <Image
                  width={200} style={{ marginTop: '40px' }}
                  src={`http://localhost:5173/${currentProduct?.image}`}
                />
              </Form.Item>
            </Col>

            <Col span={18}>
              <Form.Item
                label="Tên sản phẩm "
                name="name"
                rules={[{ required: true, message: 'Nhập tên sản phẩm!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Giá sản phẩm"
                name="price"
                rules={[{ required: true, message: 'Nhập giá sản phẩm!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mô tả"
                name="description"
                rules={[{ required: true, message: 'Nhập mô tả sản phẩm!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phân loại"
                name="idCate"
                rules={[{ required: true, message: 'Chọn phân loại sản phẩm!' }]}
              >
                <Select
                  showSearch
                  style={{ width: 160 }}
                  placeholder="Select category"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={data}
                />
              </Form.Item>
            </Col>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ margin: '20px' }}>
                Cập nhật
              </Button>
            </Form.Item>
          </Row>
        </Card>
      </Form>
    </div>
  )
}

export default UpdateProductPage