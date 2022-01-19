const solarReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BODIES':
      return {
        ...state,
        bodies: action.payload,
        loading: false,
      };
    case 'CLEAR_BODIES':
      return {
        ...state,
        bodies: [],
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default solarReducer;
