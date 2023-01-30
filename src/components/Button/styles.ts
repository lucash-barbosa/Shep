import styled from 'styled-components/native';

type buttonProps = {
  theme: any;
  backgroundColor: string;
};

type textProps = {
  theme: any;
  textColor: string;
};

export const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  height: 45px;
  background-color: ${(props: buttonProps) =>
    props.theme.colors[props.backgroundColor]};
  border-radius: 10px;
`;

export const StyledButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 14px;
  line-height: 17px;
  color: ${(props: textProps) => props.theme.colors[props.textColor]};
`;
