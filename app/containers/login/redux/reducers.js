import { fromJS } from 'immutable';
import * as CONSTANTS from './constants';

const initalState = fromJS({
  token: null,
  loading: false
});

function authReducer(state = initalState, action) {
  switch (action.type) {
    case CONSTANTS.LOGIN_REQUEST:
      return state.set('loading', true);
    case CONSTANTS.LOGIN_SUCCESS:
      return state.set('token', fromJS(action.data))
        .set('loading', false);
    case CONSTANTS.LOGOUT:
      return state.delete('token');
    default:
  }

  return state;
}

export default authReducer;
