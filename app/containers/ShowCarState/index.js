import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { carListRequest, carStateRequest } from './redux/actions';
import { Dimmer, Loader, Image, Segment, Table, Header, Button } from 'semantic-ui-react'
import { makeSelectLoading } from 'containers/App/selectors';
import {
  selectCar,
  makeSelectCarList,
  makeSelectListLoading,
  makeSelectCarState,
  makeSelectStateLoading,
  makeSelectUserToken
} from './redux/selectors';



class ShowCarState extends Component {
  constructor(props){
    super(props);
    this.state = {
      carListLoadingSuccess: false,
      loading1: false,
      loading2: false,
    }
  }
  componentWillMount() {
      this.props.carListLoad();
      this.setState({'carListLoadingSuccess': true});
  //  }

  }
  renderLoadingScreen = () => {
    const { carList } = this.props;
    return (
      <div>
        <Loader active inline='centered' />
        <Header size='small' color='blue' textAlign="center">
          Loading vehicle list...
          {/* {carList.get('display_name')}({carList.get('vin')}) */}
        </Header>

      </div>
    );
  }

  renderCarList = () => {
    const { carList } = this.props;
    return carList.map((car, index) => (
      <Header size='small' color='blue' key={car.get('vin')} textAlign="center">
        <Link key={index} to={`/showcarstate/${index}`}>
          <br/>
          {car.get('display_name')}
          &nbsp;
          ({car.get('vin')})
        </Link>
      </Header>

    ));
  }

  render() {
      const { carList, listLoading, carState, stateLoading, userToken, globalAPILoading } = this.props;
      const { carListLoadingSuccess } = this.state;
      let finalShow;
      if ( listLoading ) {
        finalShow = this.renderLoadingScreen();
      }
      if ( !listLoading ) {
        finalShow = this.renderCarList();

      }

    return (
      <div>
        { finalShow }
      </div>

    );
  }
}
const mapDispatchToProps = {
  carListLoad: carListRequest,
  carStateLoad: carStateRequest
};
const mapStateToProps = createStructuredSelector({
  carList: makeSelectCarList(),
  listLoading: makeSelectListLoading(),
  carState: makeSelectCarState(),
  stateLoading: makeSelectStateLoading(),
  userToken: makeSelectUserToken(),
  globalAPILoading: makeSelectLoading(),
//  token: selectToken(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ShowCarState);
