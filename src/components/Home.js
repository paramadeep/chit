import React, {useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import AddChitButton from './AddChitButton';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const gotoAddChit = useCallback(() => {
    navigation.navigate('New Chit');
  }, [navigation]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <AddChitButton gotoAddChit={gotoAddChit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
