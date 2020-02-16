import { createAction, handleActions } from 'redux-actions'
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects'
import createRequestSaga, {
    createRequestActionTypes,
} from '../middleware/createRequestSaga'
import * as authAPI from '../lib/api/auth'

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER',
)

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN'
)

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    })
)
export const initializeForm = createAction(INITIALIZE_FORM, form => form);

const initializeState = {
    register : {
        username : '',
        password : '',
        passwordConfirm : '',
    },
    login : {
        username : '',
        password : '',
    },
}

const auth = handleActions(
    {
        [CHANGE_FIELD] : (state, { payload: {form, key, value} }) => 
            produce(state, draft => {
                draft[form][key] = value;
        }),
        [INITIALIZE_FORM] : (state, { payload: form }) => ({
            ...state,
            [form] : initializeState[form],
        })
    },
    initializeState,
)

export default auth;