import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  MODULE_NAME as authModule,
  reducer as authReducer,
} from './auth/reducer';

const rootReducer = combineReducers({
  [authModule]: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
