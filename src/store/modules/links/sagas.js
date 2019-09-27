import { takeLatest, put, call } from 'redux-saga/effects';

// Actions
import { REQUEST_GENERATED_LINK } from './actions';

// Action Creators
import { requestGeneratedLinkSuccess } from './actionCreators';

// Services
import { requestGenerateLink } from '../../../services';

function* requestGeneratedLink({ originalURL }) {
  try {
    const response = yield call(requestGenerateLink, originalURL);

    yield put(requestGeneratedLinkSuccess(response));
  } catch (error) {
    console.error(error);
  }
}

function* watcherRequestGeneratedLink() {
  yield takeLatest(REQUEST_GENERATED_LINK, requestGeneratedLink);
}

export default watcherRequestGeneratedLink;
