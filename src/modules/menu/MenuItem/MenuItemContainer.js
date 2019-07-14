import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import * as API from '../../../services/api';
import MenuItemView from './MenuItemView';
import CommentsForm from '../../../components/CommentsForm/CommentsForm';

class MenuItemContainer extends Component {
  state = {
    item: {},
    commentValue: '',
    commentsList: [],
    error: null,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    try {
      const item = await API.getMenuItemById(id);
      this.setState({ item });
    } catch (error) {
      this.setState({ error });
    }
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    const { state } = location;

    if (state) {
      return history.push(state.from);
    }

    return history.push({
      pathname: '/menu',
      search: '?category=all',
    });
  };

  handleCommentsOnChange = event => {
    this.setState({
      commentValue: event.target.value,
    });
  };

  handleCommentSubmit = event => {
    event.preventDefault();

    const { commentValue } = this.state;
    const newComment = {
      content: commentValue,
    };

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      commentValue: '',
    }));
  };

  render() {
    const { item, commentValue, commentsList, error } = this.state;

    return (
      <Fragment>
        {error && <h1>Error...</h1>}
        <MenuItemView item={item} handleGoBack={this.handleGoBack} />
        <CommentsForm
          onChange={this.handleCommentsOnChange}
          onSubmit={this.handleCommentSubmit}
          value={commentValue}
          commentsList={commentsList}
        />
      </Fragment>
    );
  }
}

export default withRouter(MenuItemContainer);
