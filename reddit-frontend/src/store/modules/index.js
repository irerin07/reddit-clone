import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects'
import auth, { authSaga } from './auth'
import loading from './loading'
import user, { userSaga } from './user';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
});

// all은 여러개의 사가를 묶을때 사용한다.
export function* rootSaga() {
    yield all([authSaga(), userSaga()])
}

export default rootReducer;
