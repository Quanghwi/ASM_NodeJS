import React from 'react'
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../interface/interface';

interface DataType {
  key: string | number;
  name: string;

}

interface IProps {
  categories: ICategory[],
  onRemove: (idCate: number) => void
}
const CategoryManagement = (props: IProps) => {

  const RemoveCategory = (idCate: number) => {
    props.onRemove(idCate)
    console.log(idCate);

  }

  const data: DataType[] = props.categories.map((item) => {
    return {
      key: item.id,
      name: item.cateName
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
      render: (text) => <p>{text}</p>,
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
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  )
}

export default CategoryManagement