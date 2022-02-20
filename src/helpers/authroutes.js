import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFromSession } from './session';

const AuthRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    let name =  getFromSession('name');
    let isAuthorized = name  && name.length > 0;
 
    if (!isAuthorized) {
      return (
        <Route
          {...rest}
          render={props =>
            <div className="login-page">
              <Component {...rest} {...props} />
            </div>
          }
        />
      );
    } else {
      return (

        <Redirect
          to={{
            pathname: '/post',
            state: { from: props.location },

          }}
        />
      );
    }
  }
  return (
    <Routes />
  );
};


AuthRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default AuthRoute;