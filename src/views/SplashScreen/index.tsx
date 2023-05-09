/* eslint-disable indent */
import splashScreen from '@app/assets/gifs/SplashScreen.json';
import { MainStackNavigationProp, NavigationProps } from '@app/global/types';
import LottieView from 'lottie-react-native';
import React from 'react';

import { StyledView } from './styled';

const SplashScreen = ({
  navigation,
}: NavigationProps<MainStackNavigationProp>) => {
  const navigateToNextScreen = async () => {
    // if (error) {
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Home' }],
    //   });
    // } else {
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Main' }],
    //   });
    // }
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
        onAnimationFinish={navigateToNextScreen}
      />
    </StyledView>
  );
};

export default SplashScreen;
