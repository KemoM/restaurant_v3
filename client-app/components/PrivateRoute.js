import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route 
    {...rest} 
    render={(props) => (
      isLoggedIn
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} 
  />
);

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
  component: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authentication.get('loggedIn'),
  };
}

export default connect(mapStateToProps)(PrivateRoute);