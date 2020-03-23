import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
/* components */
import Main from '../../pages/Main/Main';
import Menues from '../../pages/Menu/Menu';
import Item from '../../modules/item/ItemContainer';
import ItemNew from '../../modules/item/itemNew/ItemNew';
/* others */
import routes from '../../configs/routes';

const ContentCmp = () => {
  return (
    <Layout.Content style={{ margin: '0 16px', padding: '10px 0' }}>
      <Switch>
        <Route exact path={routes.MAIN} component={Main} />
        <Route exact path={routes.MENU} component={Menues} />
        <Route exact path={routes.ITEM_NEW} component={ItemNew} />
        <Route path={routes.ITEM} component={Item} />
      </Switch>
    </Layout.Content>
  );
};

export default ContentCmp;
