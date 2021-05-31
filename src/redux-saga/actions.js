export const LOAD_UNITS_LOADING = 'REDUX_SAGA_LOAD_UNITS_LOADING';
export const LOAD_UNITS_SUCCESS = 'REDUX_SAGA_LOAD_UNITS_SUCCESS';
export const LOAD_UNITS_ERROR = 'REDUX_SAGA_LOAD_UNITS_ERROR';
export const GET_UNIT_DETAIL = 'REDUX_SAGA_GET_UNIT_DETAIL';
export const FILTER_UNIT = 'REDUX_SAGA_FILTER_UNIT';

export const loadUnits = () => ({
  type: LOAD_UNITS_LOADING,
});

export const getUnitDetailAction = () => ({
  type: GET_UNIT_DETAIL,
});

export const filterUnit = (payload) => ({
  type: FILTER_UNIT,
  payload,
});
