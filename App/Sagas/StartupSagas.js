import { put, select } from 'redux-saga/effects'
import LocalUserActions from '../Redux/LocalUserRedux';
import { is } from 'ramda'

// exported to make available for tests
export const selectAvatar = (state) => state.github.avatar

// process STARTUP actions
export function * startup (action) {
console.tron.log("-- calling loadNow");  
  yield put(LocalUserActions.loadNow());
}
