import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './header.css';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
// import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to='/'>Home</Link>
        const PORT = process.env.PORT;
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {this.props.auth0.isAuthenticated && <Link to='/profile'>Profile</Link>}
        <LogoutButton />
      </Navbar>
    );
  }
}

export default withAuth0(Header);
