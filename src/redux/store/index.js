import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from 'redux/reducers/news-reducer';
import { categoriesReducer } from 'redux/reducers/categories-reducer';

const rootReducer = combineReducers({
  newsReducer,
  categoriesReducer,
});

const configureStore = (initialState) => {
  let composeEnhancers = null;

  // add support for Redux dev tools
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return createStore(
    rootReducer,
    initialState,
    (!composeEnhancers
      ? applyMiddleware(thunk)
      : composeEnhancers(applyMiddleware(thunk))
    ),
  );
};

const store = configureStore();
export default store;
