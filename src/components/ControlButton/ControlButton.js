import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ControlButton.style';

function ControlButton({onButton, iconName, text}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onButton}>
      {iconName ? (
        <Icon name={iconName} size={60} color={'#faf0ef'}></Icon>
      ) : (
        <Text style={styles.title}>AUTO</Text>
      )}
    </TouchableOpacity>
  );
}
export default ControlButton;
