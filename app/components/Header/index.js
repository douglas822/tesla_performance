import React from 'react';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
//import {Button} from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {Button, Header} from 'semantic-ui-react';

class Header1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header as="h1" color="black" textAlign="center">
          Tesla Performance & Uncork Checker
        </Header>
      <NavBar>
        <Link to='/'>Check My Tesla |</Link>
        <Link to='/faq'>  FAQ  |</Link>
        <Link to='/contact'>  Contact</Link>
      </NavBar>
      <Header as="h4" color="black" textAlign="center">
        This website will check Tesla's server on your behalf and check to see if your see if your car is "uncorked" or not. If you have questions, please see the FAQ section.
      </Header>
      </div>
    );
  }
}

export default Header1;
