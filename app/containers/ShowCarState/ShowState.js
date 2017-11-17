import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Container, Header, Image, Table, Loader} from 'semantic-ui-react';
import { makeSelectLoading } from 'containers/App/selectors';
import { carListRequest, carStateRequest } from './redux/actions';
import {
  selectCar,
  makeSelectCarList,
  makeSelectListLoading,
  makeSelectCarState,
  makeSelectStateLoading,
  makeSelectUserToken
} from './redux/selectors';
import './style.scss';

class ShowState extends Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    const { carList } = this.props;
    this.props.carStateLoad(carList.toJS()[id]);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     const { carList } = this.props;
  //     const id = this.props.match.params.id;
  //     console.log(carList.toJS()[id]);
  //     this.props.carStateLoad(carList.toJS()[id]);
  //   }
  // }

  renderLoadingScreen = () => {
    const { carList } = this.props;
    return (
      <div>
        <Loader active inline='centered' />
        <Header size='small' color='blue' textAlign="center">
          Loading vehicle's state...
        </Header>

      </div>
    );
  }
  renderP1 = () => {
    const divStyle = {
      margin: '40px',
      border: '5px solid pink',
      wordWrap: 'break-word'
    };
    const conStyle = {
      overflowX: 'scroll'
    }
    const { carList, listLoading, carState, stateLoading, userToken } = this.props;
    return (

        <Container style={conStyle}>
          <Image src='/if_toggle_active.png' centered />
          <Header size='medium' textAlign="center">
            Congratulations! Your car appears to be "Uncorked"!
          </Header>
          <Table celled padded fixed >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>State</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body >
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
                <Table.Cell>{carState.get('vehicle_name')}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>access_token</Table.Cell>
                <Table.Cell>{userToken.get('access_token')}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>option_codes</Table.Cell>
                <Table.Cell className="fit">{carList.toJS()[this.props.match.params.id].option_codes}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Link to="/showcarstate">Back to My Cars</Link>
        </Container>
    );
  }

  renderP3 = () => {
    const { carList, listLoading, carState, stateLoading, userToken } = this.props;
    return (
      <div>
        <Image src='/if_toggle_inactive.png' centered />
        <Header size="medium" textAlign="center">
          Sorry. Your car appears to be “corked”.
        </Header>
        <Table celled selectable fixed>
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
              <Table.Cell>{carState.get('vehicle_name')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>access_token</Table.Cell>
              <Table.Cell>{userToken.get('access_token')}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>option_codes</Table.Cell>
              <Table.Cell>{carList.toJS()[this.props.match.params.id].option_codes}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );

  }

  render() {
      const { carList, listLoading, carState, stateLoading, userToken,globalAPILoading } = this.props;
      let finalShow;
      if ( stateLoading ) {
        finalShow = this.renderLoadingScreen();
      }
      if (!stateLoading){
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

export default compose(withConnect)(ShowState);
