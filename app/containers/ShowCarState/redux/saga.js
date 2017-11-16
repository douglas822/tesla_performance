import { call, put, takeLatest, fork } from 'redux-saga/effects';
import request from 'utils/request';
import * as CONSTANTS from './constants';
import { getListSuccess,  getStateSuccess } from './actions';

export function* carListRequest(action) {
  try {
    console.log("Yeah!!! car list Request");
    const listData = JSON.parse( yield call(request, 'vehicleList', 'GET', null , true));
    console.log("this is car list", listData);
    yield put(getListSuccess(listData.response));
  } catch (err) {
    console.log(err);
    // yield put(loginError(err));
  }
}

export function* carStateRequest(action) {
  try {
    console.log(action.car);
    const returnedState = JSON.parse(yield call(request, 'storecar', 'POST', action.car , true, false ));
    console.log("This is state of the car", returnedState);
    yield put(getStateSuccess(returnedState.response));
    console.log(typeof(action.car.vin));
    const sendState = Object.assign( {}, returnedState.response,{ vin: action.car.vin} )
    console.log('This is data to send with vin', sendState);
    //save database
    const stateData = yield call(request, `storestate`, 'POST', sendState , true, false );
    console.log("StoreState call is done");
  } catch (err) {
    console.log(err);
  }
}


export default [
  fork(takeLatest, CONSTANTS.CAR_STATE_REQUEST, carStateRequest),
  fork(takeLatest, CONSTANTS.CAR_LIST_REQUEST, carListRequest),
];
