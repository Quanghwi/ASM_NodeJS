import React, { useState } from 'react';
import { HomeOutlined, PicCenterOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: (
      <Link to={'/'}>Trang chủ</Link>
    ),
    key: 'HomePage',
    icon: <HomeOutlined />,

  },
  {
    label: (
      <Link to={'/products'}>Products</Link>
    ),
    key: 'Products',
    icon: <PicCenterOutlined />,
    children: [
      {
        type: 'group',
        label: 'Các Loại Sách'
      },
      {
        type: 'group',
        label: 'Sản Phẩm Công Nghệ',
      },
    ],
  },

  {
    label: (
      <Link to={'/signin'}>Đăng nhập</Link>
    ),
    key: 'signin',
    style: { textAlign: 'right' }
  },
  {
    label: (
      <Link to={'/signup'}>Đăng kí</Link>
    ),
    key: 'signup',
    style: { textAlign: 'right' }
  },

];



const WebLayout = () => {
  const [current, setCurrent] = useState('mail');

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };
  return (
    <div>
      <header>
        <Menu selectedKeys={[current]} mode="horizontal" items={items} />
      </header>
      <main>
        < Outlet />
      </main>
    </div>
  )
}

export default WebLayout