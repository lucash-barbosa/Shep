import { loginRequest } from '@app/api';
import { LoginCredentialsProps, AuthReturnProps } from '@app/global/types';
import { useMutation } from 'react-query';

import { useAuthContext } from './useAuthContext';

type LoginMutation = {
  login: (credentials: LoginCredentialsProps) => Promise<AuthReturnProps>;
  isLoading: boolean;
  error: Error | null;
};

const useLogin = (): LoginMutation => {
  const { dispatch } = useAuthContext();
  const loginMutation = useMutation<
    AuthReturnProps,
    Error,
    LoginCredentialsProps
  >(async (credentials) => loginRequest(credentials), {
    onSuccess: (data) => {
      dispatch({ type: 'LOGIN', payload: data });
    },
  });

  const login = async (
    credentials: LoginCredentialsProps
  ): Promise<AuthReturnProps> => {
    const token = await loginMutation.mutateAsync(credentials);
    return token;
  };

  return {
    login: login,
    isLoading: loginMutation.isLoading,
    error: loginMutation.error,
  };
};

export default useLogin;
