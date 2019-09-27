// Action Creators
import {
  requestGeneratedLink,
  requestGeneratedLinkSuccess,
} from '../actionCreators';

// Actions
import {
  REQUEST_GENERATED_LINK,
  REQUEST_GENERATED_LINK_SUCCESS,
} from '../actions';

describe('requestGeneratedLink', () => {
  it('should return an object with the type equal to: REQUEST_GENERATED_LINK and the originalURL equal to https://circleci.com', () => {
    const generatedLink = requestGeneratedLink('https://circleci.com');

    expect(generatedLink).toHaveProperty('type', REQUEST_GENERATED_LINK);
    expect(generatedLink).toHaveProperty('originalURL', 'https://circleci.com');
  });
});

describe('requestGeneratedLinkSuccess', () => {
  it('should return an object with the type equal to: REQUEST_GENERATED_LINK_SUCCESS and the payload equal to success: true', () => {
    const generatedLinkSuccess = requestGeneratedLinkSuccess({ success: true });

    expect(generatedLinkSuccess).toHaveProperty(
      'type',
      REQUEST_GENERATED_LINK_SUCCESS,
    );
    expect(generatedLinkSuccess).toHaveProperty('payload', {
      success: true,
    });
  });
});
