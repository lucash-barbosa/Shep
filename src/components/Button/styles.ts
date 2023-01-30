import { ButtonType, TextButtonType } from '@app/interfaces/ButtonType';
import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  height: 45px;
  background-color: ${(props: ButtonType) =>
    props.theme.colors[props.backgroundColor]};
  border-radius: 10px;
`;

export const StyledButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 14px;
  line-height: 17px;
  color: ${(props: TextButtonType) => props.theme.colors[props.textColor]};
`;
