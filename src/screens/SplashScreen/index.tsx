import splashScreen from '@app/assets/gifs/SplashScreen.json';
import { StackProps } from '@app/interfaces/NavigationType';
import LottieView from 'lottie-react-native';
import React from 'react';

import { StyledView } from './styled';

const SplashScreen = ({ navigation }: StackProps) => {
  const animationOnFinish = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };
  return (
    <StyledView>
      <LottieView
        source={splashScreen}
        loop={false}
        autoPlay={true}
        onAnimationFinish={animationOnFinish}
      />
    </StyledView>
  );
};

export default SplashScreen;
