import { fromJS } from 'immutable';

import {
  SAMPLE_SAGA_SUCCESS
} from './constants';

const initialState = fromJS({
  data: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_SAGA_SUCCESS:
      return state.set('data', action.payload);
    default:
      return state;
  }
};