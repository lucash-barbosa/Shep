import {StackNavigationProp} from '@react-navigation/stack';

export interface Navigationrops {
  [key: string]: undefined;
}

export interface StackProps {
  navigation: StackNavigationProp<Navigationrops>;
}
