import React from 'react';

interface MyProps {
  outerError: boolean;
  children: React.ReactNode;
}

interface MyState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<MyProps, MyState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): Partial<MyState> | null {
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
