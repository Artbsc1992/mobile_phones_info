import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import phones from './phones/phones';

const rootReducer = combineReducers({
  phones,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;