import React from 'react';
import { Route} from 'react-router-dom';
import PropTypes from 'prop-types';

export const UsersRoute = (props) => {
  // console.log("line:110", props);
  // console.log("line:111", props.users?.role);

  if (localStorage.getItem ('user') && props.users?.role === 'user') {
    return <Route {...props} />;
  }

  UsersRoute.propTypes = {
    users: PropTypes.shape({
      role: PropTypes.string,
      // Add more specific PropTypes for the users prop if needed
    }),
  };
  
};
