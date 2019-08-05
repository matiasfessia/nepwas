export const initialState = {
  categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
  current: null,
};

const initializeState = () => (Object.assign({}, initialState));

export const categoriesReducer = (state = initializeState(), action = {}) => {
  switch (action.type) {
    case `CHANGE_CURRENT_CATEGORY`:
      return Object.assign({}, state, {
        current: 'sports',
      });
    default:
      return state;
  }
};
