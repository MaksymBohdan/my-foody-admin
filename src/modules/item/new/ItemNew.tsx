import React from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
/* others */
import categories from '../../../configs/categories';
import { required } from '../../../configs/formItemRules';
import { itemActions } from '../../../state/item';
import { numberFormatter, numberParser } from '../../../utils';
import { FormProps } from 'antd/lib/form/Form';

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 8 } };
const tailLayout = { wrapperCol: { offset: 8, span: 16 } };
const initialValues = { price: 1 };

const ItemNew: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const onFinish = (formValues: FormProps) => {
    const item = {
      ...formValues,
      image:
        'https://cache.desktopnexus.com/thumbseg/215/215890-bigthumbnail.jpg',
    };

    dispatch(itemActions.saveMenuItem({ item, history }));
  };

  return (
    <Form {...layout} onFinish={onFinish} initialValues={initialValues}>
      <Form.Item label="Product name" name="name" rules={[required]}>
        <Input />
      </Form.Item>
      <Form.Item label="Category name" name="category" rules={[required]}>
        <Select>
          {categories.map(({ id, name }) => (
            <Select.Option key={id} value={name}>
              {name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Desciption" name="description" rules={[required]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[required]}>
        <InputNumber
          min={1}
          max={10}
          formatter={numberFormatter}
          parser={numberParser}
        />
      </Form.Item>
      <Form.Item label="Ingredients" name="ingredients">
        <Input.TextArea />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ItemNew;
