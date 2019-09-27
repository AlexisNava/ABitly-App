import { all } from 'redux-saga/effects';

// Sagas
import watcherRequestGeneratedLink from './modules/links/sagas';

function* rootSaga() {
  yield all([watcherRequestGeneratedLink()]);
}

export default rootSaga;
