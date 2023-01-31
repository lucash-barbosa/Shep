import theme from '@app/global/styles/theme';
import styled, { DefaultTheme } from 'styled-components/native';

type ButtonType = {
  theme?: DefaultTheme;
  backgroundColor: keyof typeof theme.colors;
};

type TextButtonType = {
  theme?: DefaultTheme;
  textColor: keyof typeof theme.colors;
};

export const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  height: 45px;
  background-color: ${(props: ButtonType) =>
    props.theme?.colors[props.backgroundColor]};
  border-radius: 10px;
`;

export const StyledButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 14px;
  line-height: 17px;
  color: ${(props: TextButtonType) => props.theme?.colors[props.textColor]};
`;
