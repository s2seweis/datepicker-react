import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

export const AdminRoute = props => {
  if (
    (localStorage.getItem ('user') && props.users.role === 'admin') ||
    props.users.role === 'user' ||
    props.users.role === undefined
  ) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/landing" />;
  }
};

AdminRoute.propTypes = {
  users: PropTypes.shape ({
    role: PropTypes.oneOf (['admin', 'user']),
  }),
  // Other props validation if needed
};

export default AdminRoute;
