import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ControlButton.style';

function ControlButton({onButton, iconName}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onButton}>
        <Icon name={iconName} size={60} color={'white'}></Icon>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default ControlButton;
