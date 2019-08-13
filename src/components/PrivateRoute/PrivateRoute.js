import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized, ...rest } = this.props;

    return (
      isAuthorized
      ? <Route {...rest} />
      : <Redirect to="/" />
    );
  }
}

export default withAuth(PrivateRoute);