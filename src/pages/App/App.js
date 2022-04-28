import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ControlButton from '../../components/ControlButton';
import {showMessage} from 'react-native-flash-message';
import Styles from './App.style';

function App({navigation}) {
  const handleButton = message => {
    return showMessage({
      message: message,
      type: 'success',
    });
  };
  const handleAuto = () => {
    return navigation.navigate('AutoPage');
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.firstColumn}>
        <ControlButton
          onButton={() => handleButton('Up')}
          iconName={'arrow-up-bold'}></ControlButton>
        <ControlButton
          onButton={() => handleButton('Bottom')}
          iconName={'arrow-down-bold'}></ControlButton>
      </View>
      <View style={Styles.auto}>
        <ControlButton onButton={handleAuto}></ControlButton>
      </View>

      <View style={Styles.secondColumn}>
        <ControlButton
          onButton={() => handleButton('Left')}
          iconName={'arrow-left-bold'}></ControlButton>
        <ControlButton
          onButton={() => handleButton('Right')}
          iconName={'arrow-right-bold'}></ControlButton>
      </View>
    </SafeAreaView>
  );
}

export default App;
