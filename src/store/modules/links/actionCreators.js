// Actions
import {
  REQUEST_GENERATED_LINK,
  REQUEST_GENERATED_LINK_SUCCESS,
} from './actions';

export const requestGeneratedLink = originalURL => ({
  type: REQUEST_GENERATED_LINK,
  originalURL,
});

export const requestGeneratedLinkSuccess = payload => ({
  type: REQUEST_GENERATED_LINK_SUCCESS,
  payload,
});
