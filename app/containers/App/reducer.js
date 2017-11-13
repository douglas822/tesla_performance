/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  API_LOADING,
  SET_GLOBAL_NOTIFICATION
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  notification: {
    type: '',
    visible: false,
    heading: '',
    message: '',
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case API_LOADING:
      return state
        .set('loading', action.value)
        .set('error', false);
    case SET_GLOBAL_NOTIFICATION:
      return state.set('notification', fromJS({
        type: action.messageType,
        visible: action.visible,
        heading: action.heading,
        message: action.message,
      }));
    default:
      return state;
  }
}

export default appReducer;
