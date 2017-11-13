import { createSelector } from 'reselect';

const selectCar = (state) => state.get('user').get('car');
const selectUser = (state) => state.get('user').get('user');
//const selectToken = (state) => state.get('user').get('auth');

const makeSelectCarList = () => createSelector(
  selectCar,
  (carInform) => carInform.get('carList'),
);
const makeSelectListLoading = () => createSelector(
  selectCar,
  (carInform) => carInform.get('listLoading'),
);
const makeSelectCarState = () => createSelector(
  selectCar,
  (carInform) => carInform.get('carState'),
);
const makeSelectStateLoading = () => createSelector(
  selectCar,
  (carInform) => carInform.get('stateLoading'),
);
const makeSelectUserToken = () => createSelector(
  selectUser,
  (userInform) => userInform.get('token'),
);


export {
  selectCar,
  makeSelectCarList,
  makeSelectListLoading,
  makeSelectCarState,
  makeSelectStateLoading,
  makeSelectUserToken

};
