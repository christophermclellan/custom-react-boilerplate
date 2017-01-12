import {
  SAMPLE_SAGA,
  SAMPLE_SAGA_SUCCESS,
  SAMPLE_SAGA_ERROR
} from './constants';

export const sagaAction = () => {
  return {
    type: SAMPLE_SAGA
  };
}

export const sagaActionSuccess = (payload) => {
  return {
    type: SAMPLE_SAGA_SUCCESS,
    payload
  };
}

export const sagaActionError = () => {
  return {
    type: SAMPLE_SAGA_ERROR
  };
}
