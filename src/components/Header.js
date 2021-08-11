import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={style.headerContainer}>
      <Text style={style.headerText}>Chits</Text>
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
  },
});
export default Header;
