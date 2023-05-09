import { signupRequest } from '@app/api';
import { SignupCredentialsProps, AuthReturnProps } from '@app/global/types';
import { useMutation } from 'react-query';

type SignupMutation = {
  signup: (credentials: SignupCredentialsProps) => Promise<AuthReturnProps>;
  isLoading: boolean;
  error: Error | null;
};

const useSignup = (): SignupMutation => {
  const signupMutation = useMutation<
    AuthReturnProps,
    Error,
    SignupCredentialsProps
  >(async (credentials) => signupRequest(credentials));

  const signup = async (
    credentials: SignupCredentialsProps
  ): Promise<AuthReturnProps> => {
    const token = await signupMutation.mutateAsync(credentials);
    return token;
  };

  return {
    signup: signup,
    isLoading: signupMutation.isLoading,
    error: signupMutation.error,
  };
};

export default useSignup;
