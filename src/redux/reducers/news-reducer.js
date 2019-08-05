import { FETCH_NEWS } from 'redux/constants';

export const initialState = {
  items: [],
  isFetching: false,
  error: null,
};

const initializeState = () => (Object.assign({}, initialState));

export const newsReducer = (state = initializeState(), action = {}) => {
  switch (action.type) {
    case `${FETCH_NEWS}_PENDING`:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case `${FETCH_NEWS}_FULFILLED`:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload.articles,
        error: null,
      });
    case `${FETCH_NEWS}_REJECTED`:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
};
