import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {

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

  render() {
    return (
      <header className="app-header navbar">
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink tag={Link} to="/contactus">Contact Us</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink tag={Link} to="/about">About</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink tag={Link} to="/register">Register</NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

export default Header;