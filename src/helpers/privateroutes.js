import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {getFromSession} from './session';

const PrivateRoute = ({ component: Component, redirect: pathname, ...rest}) => {
  const Routes = (props) => {
    let name =  getFromSession('name');
    let isAuthorized = name  && name.length > 0;
      console.log(rest,props,"asdcsdc routes",name)
    if( isAuthorized ){
    
      return  <Route {...rest}  render={ props => <Component {...rest} {...props } /> } />
      
    }else {
  
      return   <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      
    }
  }
  return (
    <Routes />
  );
};



PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired
};

export default PrivateRoute;


