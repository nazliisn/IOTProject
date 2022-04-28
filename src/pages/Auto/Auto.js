import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ControlButton from '../../components/ControlButton';
import {showMessage} from 'react-native-flash-message';
import Styles from './Auto.style';

function Auto({navigation}) {
  const handleAuto = () => {
    return navigation.navigate('AppPages');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.auto}>
        <ControlButton onButton={handleAuto}></ControlButton>
      </View>
    </SafeAreaView>
  );
}

export default Auto;
