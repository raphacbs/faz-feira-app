import React from 'react';
import {StyleSheet, TextInput, View, Text, TextInputProps} from 'react-native';

export interface TextFieldProps extends TextInputProps {
  name: string;
  label?: string;
  onBlur?: () => void;
  onChangeText?: (value: string) => void;
}

const TextField = ({name, label, onChangeText, ...props}: TextFieldProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} onChangeText={onChangeText} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
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
});

export default TextField;
