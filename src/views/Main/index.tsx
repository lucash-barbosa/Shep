import main from '@app/assets/images/main.png';
import Button from '@app/components/Button';
import { MainStackNavigationProp, NavigationProps } from '@app/global/types';
import { mainMocks } from '@app/mocks';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import {
  StyledImage,
  StyledText,
  StyledTitle,
  ViewText,
  ViewButton,
} from './styles';

const Main = ({ navigation }: NavigationProps<MainStackNavigationProp>) => {
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
          <Button
            onPress={() => navigation.navigate('Sign', { login: true })}
            text="Login"
          />
          <Button
            onPress={() => navigation.navigate('Sign', { login: false })}
            text="Sign Up"
            backgroundColor="white"
            textColor="darkGreen"
          />
        </ViewButton>
      </View>
    </SafeAreaView>
  );
};

export default Main;
