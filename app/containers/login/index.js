import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { loginRequest, tokenLogin } from './redux/actions';
import PropTypes from 'prop-types';

import './style.scss';
class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      token: '',
    };
  }


  onChange = (field) => (evt) => {
    this.setState({ [field]: evt.target.value });
  }

  onSubmit = () => {
    const { email, password, token } = this.state;
    if ( email === '' && password === '' && token !== '' ) {
       this.props.tokenLogin( token );
     } else {
       this.props.loginRequest(email, password);
     }

  }

  render() {
    const { email, password , token} = this.state;
    return (
      <Grid
        textAlign="center"
        className="page-login"
        verticalAlign="middle"
      >
        <Grid.Column className="column-login" onSubmit={this.onSubmit}>

          <Form size="large">
            <Segment stacked>
              <Header as="h3" color="blue" textAlign="center">
                Username/Password
              </Header>
              <Form.Input
                fluid
                value={email}
                onChange={this.onChange('email')}
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                value={password}
                onChange={this.onChange('password')}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Header as="h3" color="blue" textAlign="center">
                Access Token
              </Header>
              <Form.Input
                fluid
                value={token}
                onChange={this.onChange('token')}
                icon="lock"
                iconPosition="left"
                placeholder="User Token"
                type="text"
              />
              <Button primary fluid size="large">Check My Car</Button>
              {/* <Link to="/signup" className="signup-link">Click here to sign up</Link> */}
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  loginRequest,
  tokenLogin,

};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(LoginPage);
