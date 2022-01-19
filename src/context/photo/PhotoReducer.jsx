const photoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PHOTO':
      return {
        ...state,
        photo: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default photoReducer;
