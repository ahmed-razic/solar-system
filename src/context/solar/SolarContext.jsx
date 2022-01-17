import { createContext, useReducer } from 'react';
import solarReducer from './SolarReducer';

const SolarContext = createContext();

export const SolarProvider = ({ children }) => {
  const initialState = {
    bodies: [],
    body: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(solarReducer, initialState);

  return (
    <SolarContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SolarContext.Provider>
  );
};

export default SolarContext;
