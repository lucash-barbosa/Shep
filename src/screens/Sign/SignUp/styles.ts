import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 5%;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  margin: 10px 0;
`;

export const WrapperForm = styled.View`
  height: 300px;
  justify-content: space-between;
  margin: 5% 0;
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
  margin-bottom: 15px;
`;

export const StyledSubtitle = styled(DefaultText)`
  color: #000000;
`;

export const StyledLink = styled(DefaultText)`
  color: #0da54b;
`;
