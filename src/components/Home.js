import React, {useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import AddChitButton from './AddChitButton';
import Chits from './Chits';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const gotoAddChit = useCallback(() => {
    navigation.navigate('New Chit');
  }, [navigation]);

  const gotoDetailedChit = useCallback(
    chitId => {
      navigation.navigate('Chit', {chitId});
    },
    [navigation],
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <AddChitButton gotoAddChit={gotoAddChit} />
        <Chits gotoDetailedChit={gotoDetailedChit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
