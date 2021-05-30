//Actions
const GET_UNITS_DATA = 'GET_UNITS_DATA';

export const getUnitsAction = () => ({
  type: 'GET_UNITS_DATA',
});

//Initial State
const initialState = {
  unitsData: [],
};

// Reducers
export function unitsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_UNITS_DATA:
      return { ...state };
    default:
      return state;
  }
}
