import styled from 'styled-components/native';

export const StyledWrapper = styled.View`
  height: 160px;
  background-color: ${({theme}) => theme.colors.darkGreen};
`;

export const DivisorLine = styled.View`
  width: 90%;
  height: 1px;
  background-color: #d9d9d9;
  align-items: center;
  margin: 0 auto;
`;

export const StyledText = styled.Text`
  font-family: 'Inter-Regular';
  top: -10px;
  height: 20px;
  color: ${({theme}) => theme.colors.darkGreen};
  background-color: #f2f2f2;
  padding-left: 10px;
  padding-right: 10px;
`;
