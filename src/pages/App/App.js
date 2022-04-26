import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ControlButton from '../../components/ControlButton';
import {showMessage} from 'react-native-flash-message';
import Styles from './App.style';

function App() {
  const handleButton = () => {
    return showMessage({
      message: 'Hello World',
      type: 'success',
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.firstColumn}>
        <ControlButton
          onButton={handleButton}
          iconName={'arrow-up-bold'}></ControlButton>
        <ControlButton
          onButton={handleButton}
          iconName={'arrow-down-bold'}></ControlButton>
      </View>
    </SafeAreaView>
  );
}

export default App;
