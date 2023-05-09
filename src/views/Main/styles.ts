import styled from 'styled-components/native';

export const StyledImage = styled.Image`
  margin: auto;
  margin-top: 30%;
  margin-bottom: 5%;
`;

export const ViewText = styled.View`
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
`;

const DefaultFont = styled.Text`
  font-family: 'Inter-Regular';
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledTitle = styled(DefaultFont)`
  font-family: 'Inter-Regular';
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
  justify-content: space-between;
  gap: 100px;
  width: 90%;
  margin: auto;
  margin-bottom: 50px;
  column-gap: 50px;
`;
