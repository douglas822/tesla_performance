import userSaga from '../login/redux/saga';
import carSaga from '../ShowCarState/redux/saga';

export default function* appSaga() {
  yield []
    .concat(carSaga)
    .concat(userSaga);
}
