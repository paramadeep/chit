import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import AddChit from './AddChit';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const gotoAddChit = ()=> {
    navigation.navigate('New Chit')
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <AddChit gotoAddChit={gotoAddChit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
