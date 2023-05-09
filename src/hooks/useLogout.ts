import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAuthContext } from './useAuthContext';

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    AsyncStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};

export default useLogout;
