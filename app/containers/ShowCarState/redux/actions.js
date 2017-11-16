import * as CONSTANTS from './constants';

export function carListRequest() {
  console.log("car lists actions");
  return {
    type: CONSTANTS.CAR_LIST_REQUEST,
  };
}

export function getListSuccess(data) {
  return {
    type: CONSTANTS.GET_CAR_LIST_SUCCESS,
    data,
  };
}

export function carStateRequest(car) {
  return {
    type: CONSTANTS.CAR_STATE_REQUEST,
    car,
  };
}

export function getStateSuccess(data) {
  return {
    type: CONSTANTS.GET_CAR_STATE_SUCCESS,
    data,
  };
}
