import { combineReducers } from 'redux-immutable';

// Reducers
import reducer from './modules/links/reducer';

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
