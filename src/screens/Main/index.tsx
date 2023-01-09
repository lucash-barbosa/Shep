import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import main from '../../assets/images/main.png';
import {
  StyledImage,
  StyledText,
  StyledTitle,
  ViewText,
  ViewButton,
  SignUpButton,
  SignUpText,
} from './styles';
import {mainMocks} from '../../mocks';

const Main = () => {
  return (
    <SafeAreaView>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <StyledImage
          source={main}
          accessibilityLabel="Mulher segurando sacolas"
        />
        <ViewText>
          <StyledTitle>{mainMocks.title}</StyledTitle>
          <StyledText>{mainMocks.description}</StyledText>
        </ViewText>
        <ViewButton>
          <PrimaryButton
            onPress={() => console.log('botão pressionado')}
            text="Login"
          />
          <SignUpButton>
            <SignUpText>Inscrever-se</SignUpText>
          </SignUpButton>
        </ViewButton>
      </View>
    </SafeAreaView>
  );
};

export default Main;
