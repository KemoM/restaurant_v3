import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

import { userActions } from '../actions/userActions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  //TODO - check where these functions should go - picked up from bootstrap template
  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  logout() {
    // reset login status
    const { dispatch } = this.props;
    this.props.dispatch(userActions.logout());
  }

  render() {
    return (
      <header className="app-header navbar">
        <Nav className="d-md-down-none" navbar>
          {this.props.loggedIn ? (
            <NavItem className="px-3">
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>) : "" }
          
          <NavItem className="px-3">
            <NavLink tag={Link} to="/contactus">Contact Us</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink tag={Link} to="/about">About</NavLink>
          </NavItem>
           
          {!this.props.loggedIn ? (
            <NavItem className="px-3"><NavLink tag={Link} to="/login">Login</NavLink></NavItem>) : 
            (<Button role="button" color="danger" onClick={this.logout}>Logout</Button>)
          }
           
          {!this.props.loggedIn ? (<NavItem className="px-3"><NavLink tag={Link} to="/register">Register</NavLink></NavItem>): ""}
        </Nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  const loggedIn = state.authentication.get('loggedIn');
  return {
    loggedIn,
  };
}

export default connect(mapStateToProps)(Header);