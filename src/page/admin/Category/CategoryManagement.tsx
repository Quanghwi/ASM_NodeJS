import React, { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../interface/interface';
import { getAllCategory } from '../../../api/category';

interface DataType {
  key: string | number;
  name: string;

}

interface IProps {
  categories: ICategory[],
  onRemove: (idCate: number) => void
}
const CategoryManagement = (props: IProps) => {
  const [category, setCategory] = useState([])
  // console.log(category);

  useEffect(() => {
    getCategory()
  }, [])

  const getCategory = async () => {
    const res = await getAllCategory()
    // console.log(res);
    if (res.data && Array.isArray(res.data.datas)) {
      const data = res.data.datas.map((category: ICategory) => ({
        id: category._id,
        name: category.name
      }))
      setCategory(data)
      console.log(data);
      
    }
  }

  const RemoveCategory = (idCate: number) => {
    props.onRemove(idCate)
    // console.log(idCate);

  }


  const data: DataType[] = category.map((item) => {
    return {
      key: item.id,
      name: item.name
    }
  })

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <p>{text}</p>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Button style={{ backgroundColor: 'blue', color: 'white' }} ><Link to={`${record.key}/update`}>Update</Link></Button>
          <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => RemoveCategory(record.key)}>Remove</Button>
        </Space>
      ),
    },
  ];


  return (
    <Table rowKey={(record) => record.key} columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  )
}

export default CategoryManagement