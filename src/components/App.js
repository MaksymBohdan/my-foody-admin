import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader/AppHeader';
import Main from '../pages/Main/Main';
import Menu from '../pages/Menu/Menu';
import routes from '../configs/routes';

const App = () => (
  <>
    <AppHeader />
    <Switch>
      <Route exact path={routes.MAIN} component={Main} />
      <Route exact path={routes.MENU} component={Menu} />
    </Switch>
  </>
);

export default App;
