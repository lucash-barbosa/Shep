import { DefaultTheme } from 'styled-components/native';

export interface ButtonType {
  theme: DefaultTheme;
  backgroundColor: 'white' | 'black' | 'darkGreen' | 'pastelGreen';
}

export interface TextButtonType {
  theme: DefaultTheme;
  textColor: 'white' | 'black' | 'darkGreen' | 'pastelGreen';
}
