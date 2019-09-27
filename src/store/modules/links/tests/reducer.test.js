// Reducer
import Reducer, { initialState } from '../reducer';

describe('Link Reducer', () => {
  it('should return initial state', () => {
    const state = Reducer(undefined, {});

    expect(state).toEqual(initialState);
  });
});
