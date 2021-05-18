import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  MODULE_NAME as authModule,
  reducer as authReducer,
} from './auth/reducer';
import {
  MODULE_NAME as ticketsModule,
  reducer as ticketsReducer,
} from './tickets/reducer';

const rootReducer = combineReducers({
  [authModule]: authReducer,
  [ticketsModule]: ticketsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
