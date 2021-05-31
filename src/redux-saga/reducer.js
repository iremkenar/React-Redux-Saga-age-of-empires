import {
  LOAD_UNITS_ERROR,
  LOAD_UNITS_LOADING,
  LOAD_UNITS_SUCCESS,
  GET_UNIT_DETAIL,
} from './actions';

const initialState = { data: [], loading: false, error: '' };

export default function reduxSagaReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_UNITS_LOADING: {
      return { ...state, loading: true, error: '' };
    }
    case LOAD_UNITS_SUCCESS: {
      return { ...state, data: action.data, loading: false };
    }
    case LOAD_UNITS_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    case GET_UNIT_DETAIL:
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
}
