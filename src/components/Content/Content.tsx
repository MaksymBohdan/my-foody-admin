import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
/* components */
import Main from '../../modules/main/Main';
import Menu from '../../modules/menu/MenuListContainer';
import Item from '../../modules/item/item/ItemContainer';
import ItemNew from '../../modules/item/new/ItemNew';
/* others */
import routes from '../../configs/routes';

const ContentCmp: React.FC<{}> = () => (
  <Layout.Content style={{ padding: '10px 15px' }}>
    <Switch>
      <Route exact path={routes.MAIN} component={Main} />
      <Route exact path={routes.MENU} component={Menu} />
      <Route exact path={routes.ITEM_NEW} component={ItemNew} />
      <Route path={routes.ITEM} component={Item} />
    </Switch>
  </Layout.Content>
);

export default ContentCmp;
