import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 5%;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  margin: 10px 0 30px 0;
`;

export const WrapperForm = styled.View`
  justify-content: space-between;
  row-gap: 30px;
  margin: 10px 0;
`;

export const WrapperInput = styled.View`
  justify-content: space-between;
  row-gap: 20px;
`;

export const WrapperAuth = styled.View`
  justify-content: space-between;
  row-gap: 20px;
`;

export const WrapperError = styled.Text`
  width: 80%;
  text-align: center;
  padding: 10px 0;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.palePink};
  border: 1px solid ${({ theme }) => theme.colors.red};
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

export const StyledError = styled.Text`
  color: ${({ theme }) => theme.colors.red};
`;
