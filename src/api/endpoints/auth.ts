import {
  AuthReturnProps,
  LoginCredentialsProps,
  SignupCredentialsProps,
} from '@app/global/types';
import axios from 'axios';

// Login
export const loginRequest = async (
  credentials: LoginCredentialsProps
): Promise<AuthReturnProps> => {
  try {
    return await axios
      .post('https://authg.onrender.com/user/login', credentials)
      .then((res) => res.data);
  } catch (error: any) {
    throw new Error(error.response?.data?.err || 'An error occurred');
  }
};

// Signup
export const signupRequest = async (
  credentials: SignupCredentialsProps
): Promise<AuthReturnProps> => {
  try {
    return await axios
      .post('https://authg.onrender.com/user/signup', credentials)
      .then((res) => res.data);
  } catch (error: any) {
    throw new Error(error.response?.data?.err || 'An error occurred');
  }
};
