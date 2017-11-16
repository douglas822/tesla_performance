/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import { compose } from 'redux';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Contact from 'containers/Contact/Contact';
import LoginPage from 'containers/login/index';
import ShowCarState from 'containers/ShowCarState/index';
import ShowState from 'containers/ShowCarState/ShowState';
import FAQPage from 'containers/FAQPage/FAQPage';
import { createStructuredSelector } from 'reselect';
import reducer from 'containers/redux/reducers';
import saga from 'containers/redux/saga';
import Notification from 'containers/Notification'
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class App extends Component  {
  render(){
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Tesla Performance"
          defaultTitle="Tesla Performance"
        >
          <meta name="description" content="Tesla checking" />
        </Helmet>
        <Header />
        <Notification />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/faq" component={FAQPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/showcarstate" component={ShowCarState} />
          <Route exact path="/showcarstate/:id" component={ShowState} />
          {/* <Route exact path="/showcarstate" component={ShowCarState} /> */}
          <Route path="" component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  // currentUserToken: makeSelectUserToken(),
});
const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
)(App));
