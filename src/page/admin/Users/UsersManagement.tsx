import React from 'react'
import { IUser } from '../../../interface/interface'
import { Button, Space, Table } from 'antd'
import { Link } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table'

interface IProps {
  users: IUser[]
}
export interface DataType {
  key: number | string,
  name: string,
  email: string,
  phone: string | number,
  role: string
}
const UsersManagement = (props: IProps) => {
  const users: DataType[] = props.users.map(item => {
    return {
      key: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      role: item.role
    }
  })
  console.log(users);

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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Button style={{ backgroundColor: 'blue' }}><Link style={{ color: 'white' }} to={`${record.key}/update`}>Update</Link></Button>
        </Space>
      ),
    },
  ];

  return (
    <div><Table columns={columns} dataSource={users} pagination={{ pageSize: 7 }} /></div>
  )
}

export default UsersManagement