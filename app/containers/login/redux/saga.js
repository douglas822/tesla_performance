import { call, put, takeLatest, fork } from 'redux-saga/effects';
import request from 'utils/request';
import { push } from 'react-router-redux'
import * as CONSTANTS from './constants';
import { loginSuccess, loginError, signupSuccess, signupError } from './actions';

export function* tokenLogin(action) {
  const data = {
    access_token: action.token,
  }
  yield put(loginSuccess(data));
  yield put(push('/showcarstate'));
}
export function* loginRequest(action) {
  try {
    console.log("Yeah!!! loginRequest");
    const email = 'cameronbigger@gmail.com';
    const password = 'lowly-beau-holm4';

    const data = yield call(request, 'token', 'POST', {
      grant_type: 'password',
      client_id: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
      client_secret: 'c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3',
      email: action.email,
      password: action.password,
    });
    yield put(loginSuccess(data));
    //history.push('/showcarstate');
    yield put(push('/showcarstate'));
  } catch (err) {
    yield put(loginError(err));
  }
}

export function* signupRequest(action) {
  try {
    const data = yield call(request, 'auth/signup', 'POST', action.data);
    yield put(signupSuccess(data));
    notify.success('Your account has been created');
    // history.push('/login');
  } catch (err) {
    yield put(signupError(err));
  }
}

// export default function* authSaga() {
//   yield takeLatest(CONSTANTS.LOGIN_REQUEST, loginRequest);
//   yield takeLatest(CONSTANTS.SIGNUP_REQUEST, signupRequest);
// }
export default [
  fork(takeLatest, CONSTANTS.LOGIN_REQUEST, loginRequest),
  fork(takeLatest, CONSTANTS.SIGNUP_REQUEST, signupRequest),
  fork(takeLatest, CONSTANTS.TOKEN_LOGIN, tokenLogin),
];
