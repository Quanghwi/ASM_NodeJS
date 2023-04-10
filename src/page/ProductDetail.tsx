import React, { useEffect, useState } from 'react'
import { Card, Form, Image, Input, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row } from 'antd';
import { ICategory, IProduct } from '../interface/interface';

interface IProps {
  products: IProduct[],
  categories: ICategory[]
}

interface DataType {
  value: string | number,
  label: string
}

const ProductDetail = (props: IProps) => {
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

  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1200, margin: 'auto' }}
        initialValues={{ remember: true }}
      >
        <h2 >Chi tiết sản phẩm</h2>
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
                <Input disabled style={{ color: 'black' }} />
              </Form.Item>

              <Form.Item style={{ fontWeight: 'bold' }} label="Ảnh sản phẩm" name="image" >
                <Image
                  width={200} style={{ marginTop: '40px' }}
                  src={`http://localhost:5173/${currentProduct?.image}`}
                />
              </Form.Item>
            </Col>

            <Col span={18}>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Thông tin sản phẩm</p>
              <Form.Item
                style={{ color: 'black' }}
                label="Tên sản phẩm "
                name="name"
                rules={[{ required: true, message: 'Nhập tên sản phẩm!' }]}
              >

                <Input disabled style={{ color: 'black' }} />
              </Form.Item>

              <Form.Item
                label="Giá sản phẩm"
                name="price"
                rules={[{ required: true, message: 'Nhập giá sản phẩm!' }]}
              >
                <Input disabled style={{ color: 'black' }} />
              </Form.Item>
              <Form.Item
                label="Mô tả"
                name="description"
                rules={[{ required: true, message: 'Nhập mô tả sản phẩm!' }]}
              >
                <Input disabled style={{ color: 'black' }} />
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
                  disabled
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={
                    data.map((item) => ({
                      value: item.value,
                      label: item.label,
                      style: { color: 'black' }
                    }))
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </div>
  )
}

export default ProductDetail