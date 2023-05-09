import { AuthReturnProps } from '@app/global/types';
import { createContext, useReducer, ReactNode } from 'react';
import React from 'react';

interface State {
  user: AuthReturnProps | null;
}

interface Action {
  type: 'LOGIN' | 'LOGOUT';
  payload: AuthReturnProps | null;
}

export const AuthContext = createContext<{
  dispatch: React.Dispatch<Action>;
  user: AuthReturnProps | null;
}>({
  dispatch: () => Object,
  user: null,
});

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
  case 'LOGIN':
    return { user: action.payload };
  case 'LOGOUT':
    return { user: null };
  default:
    return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
