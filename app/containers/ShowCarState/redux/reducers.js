import { fromJS } from 'immutable';
import * as CONSTANTS from './constants';


const initalState = fromJS({
  carList: null,
  carState: null,
  listLoading: true,
  stateLoading: true,
});

function carReducer(state = initalState, action) {
  switch (action.type) {
    case CONSTANTS.CAR_LIST_REQUEST:
      return state.set('listLoading', true);
    case CONSTANTS.GET_CAR_LIST_SUCCESS:
      return state.set('carList', fromJS(action.data))
        .set('listLoading', false);
    case CONSTANTS.CAR_STATE_REQUEST:
      return state.set('stateLoading', true);
    case CONSTANTS.GET_CAR_STATE_SUCCESS:
      return state.set('carState', fromJS(action.data))
        .set('stateLoading', false);
    // case CONSTANTS.LOGOUT:
    //   return state.delete('token');
    default:
  }

  return state;
}

export default carReducer;
