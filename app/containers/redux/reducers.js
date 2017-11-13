import { combineReducers } from 'redux-immutable';
import userReducer from '../login/redux/reducers';
import carReducer from '../ShowCarState/redux/reducers';

const appReducer = combineReducers({
  user: userReducer,
  car: carReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === 'auth/logout') {
//     return appReducer(undefined, action);
//   }
//
//   return appReducer(state, action);
// };

export default appReducer;
