import React from 'react';
import {Button, StyleSheet} from 'react-native';

const AddChit = () => {
  return (
    <>
      <Button title="+ New Chit" styles={styles.newChit} />
    </>
  );
};

const styles = StyleSheet.create({
  newChit: {},
});

export default AddChit;
