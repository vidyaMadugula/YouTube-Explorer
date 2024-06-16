import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error Boundary caught an error:', error, errorInfo);
    // Update state to indicate that an error has occurred
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI when an error occurs
      return <div>Something went wrong. Please try again later.</div>;
    }
    // Render the child components normally
    return this.props.children;
  }
}

export default ErrorBoundary;
