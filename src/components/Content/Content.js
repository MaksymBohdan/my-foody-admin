import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Main from '../../pages/Main/Main';
import Menues from '../../pages/Menu/Menu';
import Item from '../../modules/item/ItemContainer';

import routes from '../../configs/routes';

const ContentCmp = () => {
  return (
    <Layout.Content style={{ margin: '0 16px' }}>
      <Switch>
        <Route exact path={routes.MAIN} component={Main} />
        <Route exact path={routes.MENU} component={Menues} />
        <Route path={routes.ITEM} component={Item} />
      </Switch>
    </Layout.Content>
  );
};

export default ContentCmp;
