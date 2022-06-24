import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import articles from './articles/articles';
import categories from './categories/categories';

const rootReducer = combineReducers({
  articles,
  categories,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
