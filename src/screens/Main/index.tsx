import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const Main = () => {
  return (
    <PrimaryButton
      onPress={() => console.log('botão pressionado')}
      text="Button"
    />
  );
};

export default Main;
