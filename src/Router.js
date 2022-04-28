import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import App from './pages/App';
import Auto from './pages/Auto';

const Stack = createNativeStackNavigator();

function Router() {
  const handleBluetooth = () => {
    return Alert.alert('Bluetooth', 'Connection established with car', [
      {text: 'OKEY', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'ASAN',
          headerTitleAlign: 'left',
          headerTintColor: '#26416d',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerLeft: () => (
            <Icon name={'car-connected'} size={30} color={'#26416d'}></Icon>
          ),
        }}>
        <Stack.Screen
          name="AppPages"
          component={App}
          options={{
            headerRight: () => (
              <Icon
                name={'bluetooth-settings'}
                size={30}
                color={'#26416d'}
                onPress={handleBluetooth}></Icon>
            ),
          }}></Stack.Screen>
        <Stack.Screen name="AutoPage" component={Auto}></Stack.Screen>
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
export default Router;
