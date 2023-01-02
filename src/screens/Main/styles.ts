import styled from 'styled-components/native';

export const StyledImage = styled.Image`
  margin: auto;
  margin-top: 25%;
  margin-bottom: 5%;
`;

export const ViewText = styled.View`
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
`;

const DefaultFont = styled.Text`
  font-family: 'Inter-Regular';
  color: ${({theme}) => theme.colors.black};
`;

export const StyledTitle = styled(DefaultFont)`
  font-size: 30px;
  line-height: 42px;
`;

export const StyledText = styled(DefaultFont)`
  font-size: 15px;
  line-height: 25px;
  margin-top: 4%;
`;

export const ViewButton = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
  column-gap: 50px;
`;

export const SignUpButton = styled.TouchableOpacity`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  margin-left: 20px;
`;

export const SignUpText = styled.Text`
  text-align: center;
  font-family: 'Inter-Bold';
  font-size: 14px;
  line-height: 17px;
  color: ${({theme}) => theme.colors.darkGreen};
`;
