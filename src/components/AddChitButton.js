import React from 'react';
import {Button, StyleSheet} from 'react-native';

const AddChitButton = ({gotoAddChit}) => {
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

export default AddChitButton;
