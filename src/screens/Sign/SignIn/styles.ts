import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  margin: 20px auto;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  margin: 10px 0;
`;

const DefaultText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 16px;
  line-height: 25px;
`;

export const StyledTitle = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 18px;
  line-height: 22px;
  color: #000;
  margin-bottom: 10px;
`;

export const StyledSubtitle = styled(DefaultText)`
  color: #000000;
`;

export const StyledLink = styled(DefaultText)`
  color: #0da54b;
`;
