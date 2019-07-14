import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import * as API from '../../../services/api';
import MenuItemNewView from './MenuItemNewView';

class MenuItemNewContainer extends Component {
  state = {
    name: '',
    description: '',
    category: '',
    error: null,
    loading: false,
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onNewItemFormSubmit = async event => {
    event.preventDefault();
    const { name, description, category } = this.state;
    const { history } = this.props;
    const newItem = {
      name,
      description,
      category,
    };

    try {
      const response = await API.postNewItemMenu(newItem);
      if (response) {
        history.push({
          pathname: '/menu',
          search: `category=all`,
        });
      }
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { name, description, category, loading, error } = this.state;

    return (
      <Fragment>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error...</h1>}
        <MenuItemNewView
          name={name}
          description={description}
          category={category}
          onSubmit={this.onNewItemFormSubmit}
          onChange={this.handleInputChange}
        />
      </Fragment>
    );
  }
}

export default withRouter(MenuItemNewContainer);
