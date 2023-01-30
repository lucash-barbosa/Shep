import { StackNavigationProp } from '@react-navigation/stack';

export interface NavigationType {
  [key: string]: undefined;
}

export interface StackProps {
  navigation: StackNavigationProp<NavigationType>;
}
