import { createStore, applyMiddleware } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';

import RootReducer from './reducers';
import RootSaga from './sagas';

function ConfigureStore() {
  const initialState = fromJS({});
  const sagaMiddleware = CreateSagaMiddleware();
  const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(RootSaga);

  return store;
}

export default ConfigureStore;
