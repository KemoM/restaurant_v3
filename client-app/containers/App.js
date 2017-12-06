import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import {Container} from 'reactstrap';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import ContactUsPage from './ContactUsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <main className="main">
          <Container fluid>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/contactus" component={ContactUsPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </main>
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = { children: PropTypes.element };

export default App;
