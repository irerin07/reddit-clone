import { createAction, handleActions } from 'redux-actions';

const SHOW_MODAL = 'modal/SHOW_MODAL';
const DONE_MODAL = 'modal/DONE_MODAL';

export const showModal = createAction(
    SHOW_MODAL,
    requestType => requestType,
);

export const doneModal = createAction(
    DONE_MODAL,
    requestType => requestType,
);

const initialState = {
    login: false,
    register: false
};

const modal = handleActions(
  {
    [SHOW_MODAL]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [DONE_MODAL]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default modal;