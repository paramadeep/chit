import React from 'react';
import {Button, StyleSheet} from 'react-native';

const AddChit = ({gotoAddChit}) => {
  return (
    <>
      <Button
        title="+ New Chit"
        styles={styles.newChit}
        onPress={gotoAddChit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  newChit: {},
});

export default AddChit;
