import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader/AppHeader';
import Main from '../pages/Main/Main';
import Menu from '../pages/Menu/Menu';
import MenuItem from '../pages/MenuItem/MenuItem';
import routes from '../configs/routes';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route exact path={routes.MAIN} component={Main} />
        <Route path={routes.MENU} component={Menu} />
        <Route path={routes.MENU_ITEM} component={MenuItem} />
        <Redirect to={routes.MAIN} />
      </Switch>
    </div>
  );
}

export default App;
