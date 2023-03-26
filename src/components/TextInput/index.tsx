/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  Dimensions,
} from 'react-native';

interface Props extends TextInputProps {
  label?: string;
}

const TextInput: React.FC<Props> = ({label, ...props}) => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <>
      {label && <label style={styles.label}>{label}</label>}
      <RNTextInput
        style={[styles.input, {width: screenWidth * 0.9}]}
        placeholderTextColor="#8F8F8F"
        {...props}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F4F4F4',
    marginBottom: 6,
  },
  label: {
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
});

export default TextInput;
