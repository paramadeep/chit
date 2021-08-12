import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/components/Home';
import NewChit from './src/components/NewChit';
import {ChitsProvider} from './src/contexts/ChitsContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ChitsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Chits" component={Home} />
          <Stack.Screen name="New Chit" component={NewChit} />
        </Stack.Navigator>
      </NavigationContainer>
    </ChitsProvider>
  );
};

export default App;
