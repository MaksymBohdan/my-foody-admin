import React, { Component } from 'react';
import * as API from '../../../services/api';
import MenuGridView from './MenuGridView';

class MenuGridContainer extends Component {
  state = {
    // loading: false,
    // error: null,
    menuItems: [],
  };

  async componentDidMount() {
    // this.setState({ loading: true });
    try {
      const menuItems = await API.getAllMenuItems();
      // console.log(menuItems);
      this.setState({ menuItems });
    } catch (error) {
      // this.setState({ error });
    }
  }

  render() {
    const { menuItems } = this.state;

    return <MenuGridView menuItems={menuItems} />;
  }
}

export default MenuGridContainer;
