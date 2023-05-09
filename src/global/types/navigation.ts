import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type MainStackParamList = {
  SplashScreen: undefined;
  Main: undefined;
  Sign: { login: boolean };
  Home: undefined;
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;

export interface NavigationProps<T> {
  navigation: T;
}

export type MainStackScreenProp = StackScreenProps<MainStackParamList, 'Sign'>;
