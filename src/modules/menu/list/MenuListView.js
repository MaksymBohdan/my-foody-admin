import React from 'react';
import { List, Avatar, Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from '../../../configs/routes';
import { cutText } from '../../../utils';

const MenuListView = ({ menuItems, changeStep, isLoadable, location }) => {
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
  );
};

const LoadMoreSection = styled.div`
  text-align: center;
  margin-top: 12px;
  height: 32px;
  line-height: 32px;
`;

export default MenuListView;
