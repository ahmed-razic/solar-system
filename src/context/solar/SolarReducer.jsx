const solarReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SOLAR_BODIES':
      return {
        ...state,
        bodies: action.payload,
        loading: false,
      };
    case 'GET_SOLAR_BODY':
      return {
        ...state,
        body: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_BODIES':
      return {
        ...state,
        bodies: [],
      };
    default:
      return state;
  }
};

export default solarReducer;
