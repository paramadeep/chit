import React, {useState} from 'react';
import {StyleSheet, Button} from 'react-native';
import InstallmentForm from './InstallmentForm';

const AddInstallment = ({updateChit}) => {
  const [isShowInstallmentForm, setIsShowInstallmentForm] = useState(false);
  const onSave = installment => {
    if (installment.amount) {
      setIsShowInstallmentForm(false);
      updateChit(installment);
    }
  };
  const showInstallmentForm = () => {
    setIsShowInstallmentForm(true);
  };

  return (
    <>
      {isShowInstallmentForm ? (
        <InstallmentForm addInstallment={onSave} />
      ) : (
        <Button title="Add Installment" onPress={showInstallmentForm} />
      )}
    </>
  );
};

const style = StyleSheet.create({});

export default AddInstallment;
