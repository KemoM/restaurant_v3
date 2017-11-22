import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

function App() {
  const activeStyle = { color: 'blue' };
  return (
    <div>
      <div>
        <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        {' | '}
        <NavLink to="/contactus" activeStyle={activeStyle}>Contact Us</NavLink>
        {' | '}
        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        {' | '}
        <NavLink to="/login" activeStyle={activeStyle}>Login</NavLink>
        {' | '}
        <NavLink to="/register" activeStyle={activeStyle}>Register</NavLink>
      </div>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = { children: PropTypes.element };

export default App;
