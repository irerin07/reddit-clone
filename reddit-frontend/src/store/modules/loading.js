import { createAction, handleActions } from './redux-actions';

const START_LOADING = 'loading/START_LOADING';
const DONE_LOADING = 'loading/DONE_LOADING';

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType,
);

export const doneLoading = createAction(
    DONE_LOADING,
    requestType => requestType,
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [DONE_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;