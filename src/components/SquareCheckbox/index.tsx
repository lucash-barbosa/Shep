/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {
  text?: string;
};

const SquareCheckbox = ({text}: Props) => {
  return (
    <View>
      <BouncyCheckbox
        fillColor="#0DA54B"
        iconStyle={{borderRadius: 5}}
        innerIconStyle={{
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#D9D9D9',
        }}
        textStyle={{
          fontFamily: 'Inter-Regular',
          fontSize: 14,
          lineHeight: 17,
          color: '#000000',
          textDecorationLine: 'none',
          marginLeft: -5,
        }}
        text={text}
      />
    </View>
  );
};

export default SquareCheckbox;
