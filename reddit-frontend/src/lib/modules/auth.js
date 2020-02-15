import { createAction, handleActions } from 'redux-actions'

const LOGIN_ACTION = 'auth/LOGIN_ACTION';
const LOGOUT_ACTION = 'auth/LOGOUT_ACTION';

export const loginAction = createAction(LOGIN_ACTION);
export const logoutAction = createAction(LOGOUT_ACTION);

const initialState = {};

const auth = handleActions(
    {
        [LOGIN_ACTION] : (state, action) => state,
        [LOGOUT_ACTION] : (state, action) => state,
    },
    initialState,
)

export default auth;