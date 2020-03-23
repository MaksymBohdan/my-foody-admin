import React from 'react';
import { List, Avatar, Button, Divider, Row, Col } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* components */
import CategorySelector from '../../../components/CategorySelector/CategorySelector';
import InputSearch from '../../../components/InputSearch/InputSearch';
import RedirectButton from '../../../components/RedirectButton/RedirectButton';
/* others */
import routes from '../../../configs/routes';
import { cutText } from '../../../utils';
import categories from '../../../configs/categories';

const MenuListView = ({
  menuItems,
  changeStep,
  isLoadable,
  location,
  changeSearch,
  changeCategory,
  category,
  searchValue,
}) => {
  const loadMore = isLoadable ? (
    <LoadMoreSection>
      <Button onClick={changeStep}>Load more</Button>
    </LoadMoreSection>
  ) : null;

  const linkTo = (path, param) => ({
    pathname: `${path}/${param}`,
    state: { from: location },
  });

  return (
    <>
      <Row style={{ paddingTop: 10 }}>
        <Col
          span={8}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <CategorySelector
            options={categories}
            onChange={changeCategory}
            value={category}
          />
          <InputSearch filterValue={searchValue} onChange={changeSearch} />
        </Col>
        <Col
          span={2}
          offset={14}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <RedirectButton lable="Add item" location={routes.ITEM_NEW} />
        </Col>
      </Row>
      <Divider />
      <List
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={menuItems}
        renderItem={({ name, price, description, id, image }) => (
          <List.Item
            actions={[
              <Link key={id} to={linkTo(routes.MENU, id)}>
                edit
              </Link>,
              <Link key={id} to={linkTo(routes.MENU, id)}>
                more
              </Link>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={image} />}
              title={name}
              description={cutText(description, 200)}
            />
            <div>Price:{price} </div>
          </List.Item>
        )}
      />
    </>
  );
};

const LoadMoreSection = styled.div`
  text-align: center;
  margin-top: 12px;
  height: 32px;
  line-height: 32px;
`;

export default MenuListView;
