import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import App from './pages/App';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <App></App>
    </NavigationContainer>
  );
}
export default Router;
