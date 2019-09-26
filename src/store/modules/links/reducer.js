import { fromJS } from 'immutable';

// Actions
import { REQUEST_GENERATED_LINK_SUCCESS } from './actions';

const initialState = fromJS({
  links: [],
});

const link = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GENERATED_LINK_SUCCESS:
      return state.setIn(
        'links',
        state.getIn('links').push(action.payload.link),
      );
    default:
      return state;
  }
};

export default link;
