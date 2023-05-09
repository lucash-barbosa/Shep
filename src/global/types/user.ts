// Login
export type LoginCredentialsProps = {
  email: string;
  password: string;
  rememberUser?: boolean;
};

// Signup
export type SignupCredentialsProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  rememberUser?: boolean;
};

// Returns
export type AuthReturnProps =
  | {
      token: string;
      user: {
        id: number;
        username: string;
        email: string;
      };
    }
  | {
      err: string;
    };
