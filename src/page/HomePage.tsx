import { Button, Space } from 'antd'
import React from 'react'
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Space size="middle">
        <Button type="primary" style={{ backgroundColor: '#1677ff' }}>
          <Link to={'/products'}>Products</Link>
        </Button>
      </Space>
    </div>
  )
}

export default HomePage