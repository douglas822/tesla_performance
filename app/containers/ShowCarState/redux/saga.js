import { call, put, takeLatest, fork } from 'redux-saga/effects';
import request from 'utils/request';
import * as CONSTANTS from './constants';
import { getListSuccess,  getStateSuccess } from './actions';

export function* carListRequest(action) {
  try {
    console.log("Yeah!!! car list Request");

    const listData = JSON.parse( yield call(request, 'vehicleList', 'GET', null , true));
    console.log("this is car list", listData);
    yield put(getListSuccess(listData.response[0]));
    const vin = listData.response[0]['vin'];

    const returnedState = JSON.parse(yield call(request, 'storecar', 'POST', listData.response[0] , true, false ));
    console.log("This is state of the car", returnedState);
    yield put(getStateSuccess(returnedState.response));

    const sendState = Object.assign( {}, returnedState.response,{ vin: vin} )
    console.log('This is data to send with vin', sendState);
    //save database
    const stateData = yield call(request, `storestate`, 'POST', sendState , true, false );


  } catch (err) {
    console.log(err);
    // yield put(loginError(err));
  }
}

export function* carStateRequest(action) {
  try {
    const { vehicle_id } = action;
     const data = yield call(request, `api/1/vehicles/${vehicle_id}/data_request/vehicle_state`, 'GET', null , true);
    console.log(data);
    //yield put(getStateSuccess(data));
    //yield put(push('/showcarstate'));
  } catch (err) {
    console.log(err);
    // yield put(loginError(err));
  }
}


export default [
  fork(takeLatest, CONSTANTS.CAR_STATE_REQUEST, carStateRequest),
  fork(takeLatest, CONSTANTS.CAR_LIST_REQUEST, carListRequest),
];
