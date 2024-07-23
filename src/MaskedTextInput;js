import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { applyMask } from './maskUtils';

const MaskedTextInput = ({ maskFormat, ...props }) => {
  const [value, setValue] = useState('');

  const handleChangeText = (text) => {
    let newValue = text;
    if (text.length < value.length) {
      newValue = text.slice(0, -1);
    }

    setValue(applyMask(newValue, maskFormat));
  };

  return (
    <TextInput
      {...props}
      value={value}
      onChangeText={handleChangeText}
    />
  );
};

export default MaskedTextInput;
