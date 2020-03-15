import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader/AppHeader';
import Main from '../pages/Main/Main';
import Menu from '../pages/Menu/Menu';
import routes from '../configs/routes';
import Item from '../modules/item/ItemContainer';

const App = () => (
  <>
    <AppHeader />
    <Switch>
      <Route exact path={routes.MAIN} component={Main} />
      <Route exact path={routes.MENU} component={Menu} />
      <Route path={routes.ITEM} component={Item} />
    </Switch>
  </>
);

export default App;
