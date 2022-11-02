import * as actionType from './actions-types';
export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.GET_LOCATION_START_ASYNC:
      return {
        ...state,
        loading: true,
        error: { hasError: false, errorMessage: '' },
      };
    case actionType.GET_LOCATION_ERROR_ASYNC:
      return {
        ...state,
        loading: false,
        error: { hasError: true, errorMessage: action.payload },
      };
    case actionType.GET_LOCATION_END_ASYNC:
      console.log(action.payload);
      return {
        ...state,
        location: action.payload,
        loading: false,
        error: { hasError: false, errorMessage: '' },
      };
    default:
      return { ...state };
  }
};
