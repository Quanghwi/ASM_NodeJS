import React, { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../interface/interface';
import { Link } from 'react-router-dom';
import { getAll } from '../api/product';

interface DataType {
  key: string | number,
  name: string,
  price: number,
  description: string,
  categoryId: number
}
export interface IProps {
  products: IProduct[],
  onRemove?: (id: number) => void
}

const ProductsPage = (props: IProps) => {


  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
// console.log(product);
  const getProducts = async () => {
    const response = await getAll();
    // console.log(response);
    if (response.data && Array.isArray(response.data.datas)) {
      const data = response.data.datas.map((product:IProduct) => ({
        id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
      }));
      setProduct(data);
      console.log(data);
    }
  };

  const data: DataType[] = product.map(item => {
    return {
      key: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      categoryId: item.categoryId
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
      title: 'ID',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render:(text) => <a href="">{text}</a>
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