import React, { useState } from 'react';
import {
  DatabaseOutlined,
  DesktopOutlined,
  LogoutOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MenuProps, Input, Avatar, Space, Row, Col } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from "react-router-dom"
// import ProductsManagement from '../admin/Products/ProductsManagement';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to={'/admin'}>Dashboard</Link>, '1', <PieChartOutlined />,
  ),

  getItem(<Link to={'/admin/products'}>Products</Link>, 'sub1', <DesktopOutlined />, [
    getItem(<Link to={'/admin/products'}>Product Management</Link>, '2'),
    getItem(<Link to={'/admin/addProduct'}>Add Product</Link>, '3')
  ]),

  getItem(<Link to={'/admin/categories'}>Category</Link>, 'sub2', <DatabaseOutlined />, [
    getItem(<Link to={'/admin/categories'}>Category Management  </Link>, '4'),
    getItem(<Link to={'/admin/addCategories'}>Add Category</Link>, '5')
  ]),

  getItem(<Link to={'/admin/users'}>Users</Link>, '6', <UserOutlined />),
  getItem(<Link to={'/'}>Log Out</Link>, '7', <LogoutOutlined />),
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }}>
          <h3 style={{ color: 'white', paddingTop: '3px', paddingLeft: '10px' }}>Administrator</h3>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

      <Layout className="site-layout">

        <Header style={{ padding: 2, background: colorBgContainer }}>
          <Row justify="space-around" align="middle">
            <Col span={12}>
              <Search style={{ width: '100%', maxWidth: '600px', display: 'block', marginLeft: '40px' }} placeholder="input search text" onSearch={onSearch} enterButton />
            </Col>
            <Col span={4}>
              <div>
                <Avatar style={{ marginRight: '10px' }} size="large" icon={<UserOutlined />}></Avatar>Đặng Quang Huy
              </div>

            </Col>
          </Row>
        </Header >

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>

          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>

        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Edited by ĐQH</Footer>

      </Layout>
    </Layout>
  );
}

export default AdminLayout