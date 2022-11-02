import React, { createContext, useContext, useReducer, useRef } from 'react';
import { initialState } from './initialState';
import { reducer } from './reducer';
import P from 'prop-types';
import { buildActions } from './build-actions';

const Context = createContext();

export const AppContext = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[appState, actions.current]}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('you mush use useAppContext inside <AppContext/>');
  }

  return [...context];
};
