import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/components/Home';
import NewChit from './src/components/NewChit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chits" component={Home} />
        <Stack.Screen name="New Chit" component={NewChit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
