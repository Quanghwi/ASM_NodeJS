import React, { useState } from 'react'
import { Button, Card, Form, Upload, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row, Input } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { ICategory, IProduct } from '../../../interface/interface';
import { Modal } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';

interface IProps {
  onAdd: (product: IProduct) => void
}


const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const AddProduct = (props: IProps) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([])
  
  const navigate = useNavigate()
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const onFinish = (values: any) => {
    props.onAdd(values)
    navigate('/admin/products')
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1000, margin: 'auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2>Thêm mới sản phẩm</h2>
        <Card
          hoverable
        >    <Row>
            <Col span={6}>
              <Form.Item label="Thêm ảnh"><br /><br />
                <>
                  <Upload
                    action="/public"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                  <Modal open={previewOpen} title={previewTitle}  onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                </>
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
                label="Category"
                name="categoryId"
                rules={[{ required: true, message: 'Nhập mô tả sản phẩm!' }]}
              >
                <Input />
              </Form.Item>
              
            </Col>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ margin: '20px' }}>
                Thêm mới
              </Button>
            </Form.Item>
          </Row>
        </Card>
      </Form>
    </div>
  )
}

export default AddProduct