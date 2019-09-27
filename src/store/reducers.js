import { combineReducers } from 'redux-immutable';

// Reducers
import link from './modules/links/reducer';

const rootReducer = combineReducers({
  link,
});

export default rootReducer;
