import { createContext, useReducer } from 'react';
import photoReducer from './PhotoReducer';

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const initialState = {
    photo: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(photoReducer, initialState);

  return (
    <PhotoContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoContext;
