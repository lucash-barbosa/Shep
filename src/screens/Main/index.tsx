import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from '@app/components/Button';
import {StackProps} from '@app/interfaces/Navigation';
import {mainMocks} from '@app/mocks';
import {
  StyledImage,
  StyledText,
  StyledTitle,
  ViewText,
  ViewButton,
} from './styles';

import main from '@app/assets/images/main.png';

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
          <Button
            onPress={() => console.log('botão pressionado')}
            text="Log In"
          />
          <Button
            onPress={() => navigation.navigate('Sign')}
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
