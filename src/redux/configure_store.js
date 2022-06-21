import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import articles from './articles/articles';

const rootReducer = combineReducers({
  articles,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
