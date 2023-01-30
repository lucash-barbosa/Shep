import {useContext} from 'react';
import {AuthContext} from '@app/context/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider');
  }

  return context;
};
