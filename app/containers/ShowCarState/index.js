import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { carListRequest, carStateRequest } from './redux/actions';
import { Dimmer, Loader, Image, Segment, Table, Header } from 'semantic-ui-react'
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
      console.log("this call has been done.")
  //  }

  }
  renderLoadingScreen = () => {
    const { carList } = this.props;
    return (
      <div>
        <Loader active inline='centered' />
        <Header size='small' color='blue' textAlign="center">
          Loading vehicle list and state...
          {/* {carList.get('display_name')}({carList.get('vin')}) */}
        </Header>

      </div>
    );
  }
  renderP1 = () => {
    const { carList, listLoading, carState, stateLoading, userToken } = this.props;
    return (

        <div>
          <Image src='./if_toggle_active.png' centered />
          <Header size='medium' textAlign="center">
            Congratulations! Your car appears to be "Uncorked"!
          </Header>
          <Table celled celled selectable centered fixed singleLine selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>State</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>per_config</Table.Cell>
                <Table.Cell>{carState.get('perf_config')}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>car_version</Table.Cell>
                <Table.Cell>{carState.get('car_version')}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>vehicle_name</Table.Cell>
                <Table.Cell>{carState.get('car_version')}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>access_token</Table.Cell>
                <Table.Cell>{userToken.get('access_token')}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>option_codes</Table.Cell>
                <Table.Cell>{carList.get('option_codes')}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
    );
  }

  renderP3 = () => {
    const { carList, listLoading, carState, stateLoading, userToken } = this.props;
    return (
      <div>
        <Image src='./if_toggle_inactive.png' centered />
        <Header size="medium" textAlign="center">
          Sorry. Your car appears to be “corked”.
        </Header>
        <Table celled selectable centered fixed singleLine >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>State</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>per_config</Table.Cell>
              <Table.Cell>{carState.get('perf_config')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>car_version</Table.Cell>
              <Table.Cell>{carState.get('car_version')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>vehicle_name</Table.Cell>
              <Table.Cell>{carState.get('car_version')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>access_token</Table.Cell>
              <Table.Cell>{userToken.get('access_token')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>option_codes</Table.Cell>
              <Table.Cell>{carList.get('option_codes')}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );

  }

  render() {
      const { carList, listLoading, carState, stateLoading, userToken,globalAPILoading } = this.props;
      console.log(carList, listLoading, carState, stateLoading, userToken);
      const { carListLoadingSuccess } = this.state;
      let finalShow;
      if ( listLoading || stateLoading ) {
        finalShow = this.renderLoadingScreen();
      }
      if ( !listLoading && !stateLoading){
        if ( carState.get('perf_config') === 'P1') {
          finalShow = this.renderP1();
        } else if ( carState.get('perf_config') === 'P3') {
          finalShow = this.renderP3();
        } else {
          finalShow = (
            <h1>Sorry, something went wrong!</h1>
          );
        }
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
