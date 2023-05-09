import { AuthReturnProps } from '@app/global/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rememberUserHandler = (
  shouldRememberUser?: boolean,
  authData?: AuthReturnProps
): void => {
  if (shouldRememberUser == true && authData && 'token' in authData) {
    const { user, token } = authData;
    AsyncStorage.setItem('@username', user.username);
    AsyncStorage.setItem('@token', token);

    console.log('You will be remembered');
  } else {
    AsyncStorage.removeItem('@username');
    AsyncStorage.removeItem('@token');
  }
};

export default rememberUserHandler;
