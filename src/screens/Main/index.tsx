import React from 'react';
import {SafeAreaView, View} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {StackProps} from '../../interfaces/Navigation';
import {mainMocks} from '../../mocks';
import {
  StyledImage,
  StyledText,
  StyledTitle,
  ViewText,
  ViewButton,
} from './styles';

import main from '../../assets/images/main.png';
import SecundaryButton from '../../components/SecundaryButton';

const Main = ({navigation}: StackProps) => {
  return (
    <SafeAreaView>
      <View>
        <StyledImage
          source={main}
          accessibilityLabel="Mulher segurando sacolas"
        />
        <ViewText>
          <StyledTitle>{mainMocks.main.title}</StyledTitle>
          <StyledText>{mainMocks.main.description}</StyledText>
        </ViewText>
        <ViewButton>
          <PrimaryButton
            onPress={() => console.log('botão pressionado')}
            text="Log In"
          />
          <SecundaryButton
            onPress={() => navigation.navigate('Sign')}
            text="Sign Up"
          />
        </ViewButton>
      </View>
    </SafeAreaView>
  );
};

export default Main;
