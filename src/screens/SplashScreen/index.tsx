import React from 'react';
import LottieView from 'lottie-react-native';
import splashScreen from '../../assets/gifs/SplashScreen.json';
import {StyledView} from './styled';
import {StackProps} from '../../interfaces/Navigation';

const SplashScreen = ({navigation}: StackProps) => {
  const animationOnFinish = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
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
