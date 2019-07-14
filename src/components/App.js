import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader/AppHeader';
import Main from '../pages/Main/Main';
import Menu from '../pages/Menu/Menu';
import MenuItem from '../pages/MenuItem/MenuItemPage';
import MenuItemNew from '../pages/MenuItemNew/MenuItemNew';
import routes from '../configs/routes';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route exact path={routes.MAIN} component={Main} />
        <Route exact path={routes.MENU} component={Menu} />
        <Route exact path={routes.MENU_ITEM_NEW} component={MenuItemNew} />
        <Route exact path={routes.MENU_ITEM} component={MenuItem} />
        <Redirect to={routes.MAIN} />
      </Switch>
    </div>
  );
}

export default App;
