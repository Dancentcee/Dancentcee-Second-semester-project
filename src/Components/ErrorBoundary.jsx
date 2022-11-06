import {Component} from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ErrorBoundary({children}) {
    const [hasError, setHasError] = useState(false);
    const location = useLocation();
    useEffect(() => {
      if (hasError) {
        setHasError(false);
      }
    }, [location.key]);
    return (
      /**
       * NEW: The class component error boundary is now
       *      a child of the functional component.
       */
      <ErrorBoundaryInner 
        hasError={hasError} 
        setHasError={setHasError}
      >
        {children}
      </ErrorBoundaryInner>
    );
  }
  
  /**
   * NEW: The class component accepts getters and setters for
   *      the parent functional component's error state.
   */
  class ErrorBoundaryInner extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(_error) {
      return { hasError: true };
    }
  
    componentDidUpdate(prevProps, _previousState) {
      if(!this.props.hasError && prevProps.hasError) {
        this.setState({ hasError: false });
      }
    }
  
    componentDidCatch(_error, _errorInfo) {
      this.props.setHasError(true);
    }
  
    render() {
      return this.state.hasError
        ? <h1>There was an error</h1>
        : this.props.children; 
    }
}