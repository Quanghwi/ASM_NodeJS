import React from 'react'
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../interface/interface';
import { Link } from 'react-router-dom';

interface DataType {
  key: string | number;
  name: string;
  price: number;
  image: string,
  description: string,
  idCate: number
}
export interface IProps {
  products: IProduct[],
  onRemove?: (id: number) => void
}

const ProductsPage = (props: IProps) => {

  const data: DataType[] = props.products.map(item => {
    return {
      key: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
      idCate: item.idCate
    }
  })

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text, record, index) => index + 1
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (Image) => <img style={{ width: '200px' }} src={Image} alt="" />
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Button><Link to={`/products/${record.key}`}>Detail</Link></Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
  )
}

export default ProductsPage