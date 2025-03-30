


import { Component } from "react";
import { Navigate } from "react-router-dom";

class AuthGuard extends Component {
  render() {
    const { isAuthenticated, component: Component } = this.props;

    if (!isAuthenticated) {
      // if user is not authenticated, redirect to login page
      return <Navigate to="/Login" />;
    }

    // if user is authenticated, render the protected component
    return <Component {...this.props} />;
  }
}

export default AuthGuard;
