import { fromJS } from 'immutable';

// Actions
import { REQUEST_GENERATED_LINK_SUCCESS } from './actions';

const initialState = fromJS({
  links: [],
});

const link = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GENERATED_LINK_SUCCESS:
      const generatedURL = action.payload.generatedUrl;
      const originalURL = action.payload.originalUrl;
      const foundItem = state
        .get('links')
        .find(link => link.generatedURL === generatedURL);

      if (foundItem) {
        return state;
      }

      return state.update('links', links =>
        links.push({
          generatedURL,
          originalURL,
        }),
      );
    default:
      return state;
  }
};

export default link;
