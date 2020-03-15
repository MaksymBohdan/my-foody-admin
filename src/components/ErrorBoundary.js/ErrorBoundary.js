import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { outerError, children } = this.props;

    return hasError || outerError ? (
      <div>
        <h1>Oops, something went wrong :(</h1>
      </div>
    ) : (
      children
    );
  }
}
